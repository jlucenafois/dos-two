import WordPuzzle from "./prefabs/WordPuzzle";
import Base from "../Base";
import { SCRIPT } from "../../script";
import { renderDualShape } from "../../utils";
import { DualComponent } from "../../../types/components/DualComponent";
import { PuzzleManager } from "./managers/PuzzleManager";

export interface WorldBounds {
	width: number;
	height: number;
	x: number;
	y: number;
}

export default class WC_Game extends Base {
	private theme: string;
	private puzzle: WordPuzzle;
	private padding = { top: 200, left: 100, right: 100, bottom: 100 };
	private worldBounds: WorldBounds;
	private puzzleManager: PuzzleManager;
	private progress = 0.0;
	private currentWordIndex = 0;
	private vocabData: any;
	private displayImage: Phaser.GameObjects.Image;

	constructor() {
		super("WC_Game");
	}

	init({ theme }: { theme: string }): void {
		this.theme = theme;
	}

	editorCreate(): void {
		this.events.emit("scene-awake");
	}

	create(): void {
		this.editorCreate();
        super.create();

		this.events.emit("showExitButton");
		this.events.emit("changeBackground", "#ffffff");
		this.events.emit("showProgressBar");

		this.events.once("shutdown", this.shutDownListener, this);
		this.events.on("puzzleComplete", this.onPuzzleComplete, this);

		this.vocabData = this.cache.json.get("vocabData");
		if (!this.vocabData.hasOwnProperty(this.theme)) {
			console.error("topic does not exist!");
		}

		this.setupWorld();
		this.setupPhysics();
		this.setupPuzzleManager();
	}

	private setupWorld(): void {
		this.worldBounds = {
			x: this.padding.left,
			y: this.padding.top,
			width: this.cameras.main.width - (this.padding.left + this.padding.right),
			height:
				this.cameras.main.height - (this.padding.top + this.padding.bottom),
		};

		this.createBoundaryWalls();
	}

	private setupPhysics(): void {
		// Add pointer constraint
		this.matter.add.pointerConstraint({
			stiffness: 0.1,
			damping: 0.1,
			length: 0,
		});

		// Register input
		this.input.on("pointerup", (pointer: Phaser.Input.Pointer) => {
			const bodies = this.matter.intersectPoint(pointer.x, pointer.y);
			if (bodies.length == 2) {
				this.puzzle.handlepointerup(bodies[0], bodies[1]);
			}
		});
	}

	private setupPuzzleManager(): void {
		const words = this.vocabData[this.theme];

		this.displayImage = this.add
			.sprite(
				this.cameras.main.width / 2,
				150,
				words[this.currentWordIndex]["english"]
			)
			.setOrigin(0.5, 0)
			.setScale(0.4);

		this.puzzleManager = new PuzzleManager({
			isEnglishFirst: true,
			quizMode: "after",
			content: words[this.currentWordIndex],
		});

		this.spawnPuzzle();
	}

	private onPuzzleComplete(): void {
		this.puzzle.destroy();
		this.progress += 0.25;
		this.events.emit("updateProgressBar", this.progress);

		if (this.puzzleManager.advanceToNextStep()) {
			this.spawnPuzzle();
			return;
		}

		this.displayImage.destroy();
		this.currentWordIndex++;

		if (this.currentWordIndex >= this.vocabData[this.theme].length) {
			// TODO: show end screen
			this.events.emit("showEndScreen");
		} else {
            this.progress = 0.0;
            this.events.emit("updateProgressBar", this.progress);
            this.setupPuzzleManager();
		}
	}

	private spawnPuzzle() {
		const currentStep = this.puzzleManager.getCurrentStep();

		const sceneScript = SCRIPT[this.scene.key];
        ///@ts-ignore
        const dualComponents = sceneScript.sections[0].dualComponents;
        dualComponents?.forEach((dc) =>
            this.renderDualComponent(dc, currentStep)
        );

		// this have to come after for the floating letters to be rendered on top!!!
		this.puzzle = new WordPuzzle(
			this,
			this.worldBounds,
			currentStep.word,
			currentStep.quiz
		);
	}

	renderDualComponent(dc: DualComponent, step: any): void {
		if (!dc.dualShape) return;
		const { coordinates, dualShape } = dc;

		// Let the manager handle the shape and text logic
		const { preferredShape, alternateShape, primaryWord, secondaryWord } =
			this.puzzleManager.getComponentRenderings(dualShape, step);

		// Render shapes
		renderDualShape(
			this,
			{
				x: coordinates.preferredX,
				y: coordinates.preferredY,
				type: preferredShape.type,
				style: preferredShape.style,
			},
			{
				x: coordinates.alternateX,
				y: coordinates.alternateY,
				type: alternateShape.type,
				style: alternateShape.style,
			}
		);

		// Add text
		this.add.text(
			coordinates.preferredX + 25,
			coordinates.preferredY + 25,
			primaryWord,
			{ font: "bold 24px Raleway", color: "#000000" }
		);

		this.add.text(
			coordinates.alternateX + 25,
			coordinates.alternateY + 25,
			secondaryWord,
			{ font: "bold 24px Raleway", color: "#000000" }
		);
	}

	createBoundaryWalls() {
		const walls = [
			// Left wall
			[
				this.padding.left / 2,
				this.cameras.main.height / 2,
				this.padding.left,
				this.cameras.main.height,
			],
			// Right wall
			[
				this.cameras.main.width - this.padding.right / 2,
				this.cameras.main.height / 2,
				this.padding.right,
				this.cameras.main.height,
			],
			// Top wall
			[
				this.cameras.main.width / 2,
				this.padding.top / 2,
				this.cameras.main.width,
				this.padding.top,
			],
			// Bottom wall
			[
				this.cameras.main.width / 2,
				this.cameras.main.height - this.padding.bottom / 2,
				this.cameras.main.width,
				this.padding.bottom,
			],
		];

		walls.forEach(([x, y, width, height]) =>
			this.matter.add.rectangle(x, y, width, height, { isStatic: true })
		);
	}

	update() {
		this.puzzle.update();
	}

	shutDownListener(): void {
        this.currentWordIndex = 0;
        this.progress = 0.0;
		this.events.off("puzzleComplete", this.onPuzzleComplete, this);
		if (this.puzzle) {
			this.puzzle.destroy(true);
			///@ts-ignore
			this.puzzle = null;
		}
		if (this.puzzleManager) {
			///@ts-ignore
			this.puzzleManager = null;
		}
	}
}
