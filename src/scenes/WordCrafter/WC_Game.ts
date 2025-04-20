import WordPuzzle from "./prefabs/WordPuzzle";
import Base from "../Base";
import { SCRIPT } from "../../script";
import { renderDualShape } from "../../utils";
import { DualComponent } from "../../../types/components/DualComponent";

export interface WorldBounds {
	width: number;
	height: number;
	x: number;
	y: number;
}

interface PuzzleStep {
	word: string;
	quiz: boolean;
	isEnglishPreferred: boolean;
}

export default class WC_Game extends Base {
	private theme: string = "Mirror";
	private puzzle: WordPuzzle;
	private padding = {
		top: 200,
		left: 100,
		right: 100,
		bottom: 100,
	};
	private worldBounds: WorldBounds;
	private puzzleIndex = 0;
	private puzzleSteps: PuzzleStep[] = [];
	private content: { image: string; english: string; spanish: string } = {
		image: "mirror",
		english: "mirror",
		spanish: "espejo",
	};
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
		this.events.emit("showExitButton");
		this.events.emit("changeBackground", "#ffffff");

		this.worldBounds = {
			x: this.padding.left,
			y: this.padding.top,
			width: this.cameras.main.width - (this.padding.left + this.padding.right),
			height:
				this.cameras.main.height - (this.padding.top + this.padding.bottom),
		};

		const imageSprite = this.add.sprite(
			this.cameras.main.width / 2,
			150,
			"mirror"
		);
		imageSprite.setOrigin(0.5, 0);
		imageSprite.scale = 0.4;
		this.createBoundaryWalls();

		this.puzzleSteps = [
			{
				word: this.content.english,
				quiz: false,
				isEnglishPreferred: true,
			},
			{
				word: this.content.spanish,
				quiz: false,
				isEnglishPreferred: false,
			},
			{
				word: this.content.english,
				quiz: true,
				isEnglishPreferred: true,
			},
			{
				word: this.content.spanish,
				quiz: true,
				isEnglishPreferred: false,
			},
		];

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

		// Puzzle complete flow
		this.events.on("puzzleComplete", () => {
			this.puzzle.destroy(); // destroy prefab
			this.puzzleIndex++;

			if (this.puzzleIndex >= this.puzzleSteps.length) {
				console.log("✅ All puzzles complete!");
				return;
			}

			this.spawnPuzzle();
		});

		// Start with the first one
		this.spawnPuzzle();
	}

	private spawnPuzzle() {
		const step = this.puzzleSteps[this.puzzleIndex];
		this.puzzle = new WordPuzzle(this, this.worldBounds, step.word, step.quiz);

		// render aside where it displays the english and spanish words
		const sceneScript = SCRIPT[this.scene.key];
		if (sceneScript) {
			sceneScript.dualComponents?.forEach((dc) =>
				this.renderDualComponent(dc, step)
			);
		}
	}

	renderDualComponent(dc: DualComponent, step: PuzzleStep): void {
		if (!dc.dualShape) return;

		const {
			preferredX: x1,
			preferredY: y1,
			alternateX: x2,
			alternateY: y2,
		} = dc.coordinates;
		const { englishShape, spanishShape } = dc.dualShape;

		const preferredShape = step.isEnglishPreferred
			? englishShape
			: spanishShape;
		const alternateShape = step.isEnglishPreferred
			? spanishShape
			: englishShape;

		renderDualShape(
			this,
			{ x: x1, y: y1, type: preferredShape.type, style: preferredShape.style },
			{ x: x2, y: y2, type: alternateShape.type, style: alternateShape.style }
		);

		const [englishWord, spanishWord] = step.quiz
			? ["English", "Spanish"]
			: [this.content.english, this.content.spanish];

		this.add.text(
			x1 + 25,
			y1 + 25,
			step.isEnglishPreferred ? englishWord : spanishWord,
			{
				font: "bold 24px Raleway",
				color: "#000000",
			}
		);

		this.add.text(
			x2 + 25,
			y2 + 25,
			step.isEnglishPreferred ? spanishWord : englishWord,
			{
				font: "bold 24px Raleway",
				color: "#000000",
			}
		);
	}

	createBoundaryWalls() {
		// Left wall
		this.matter.add.rectangle(
			this.padding.left / 2,
			this.cameras.main.height / 2,
			this.padding.left,
			this.cameras.main.height,
			{ isStatic: true }
		);

		// Right wall
		this.matter.add.rectangle(
			this.cameras.main.width - this.padding.right / 2,
			this.cameras.main.height / 2,
			this.padding.right,
			this.cameras.main.height,
			{ isStatic: true }
		);

		// Top wall
		this.matter.add.rectangle(
			this.cameras.main.width / 2,
			this.padding.top / 2,
			this.cameras.main.width,
			this.padding.top,
			{ isStatic: true }
		);

		// Bottom wall
		this.matter.add.rectangle(
			this.cameras.main.width / 2,
			this.cameras.main.height - this.padding.bottom / 2,
			this.cameras.main.width,
			this.padding.bottom,
			{ isStatic: true }
		);
	}

	update() {
		this.puzzle.update();
	}
}
