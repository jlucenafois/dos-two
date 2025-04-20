import WordPuzzle from "./objects/WordPuzzle";

export interface worldBounds {
	width: number;
	height: number;
	x: number;
	y: number;
}

export default class WC_Game extends Phaser.Scene {
	private theme: string = "Mirror";
	private puzzle: WordPuzzle;
	private padding = {
		top: 200,
		left: 100,
		right: 100,
		bottom: 100,
	};
	private worldBounds: worldBounds;

	// New
	private puzzleIndex = 0;
	private puzzleSteps: { image: string; word: string; quiz: boolean }[] = [];

	constructor() {
		super("WC_Game");
	}

	init({ theme }: { theme: string }): void {
		this.theme = theme;
	}

	preload() {
		this.load.image(
			"letter_slot_default",
			"assets/WordCrafter/letter_slot_default.png"
		);
		this.load.image(
			"letter_slot_correct",
			"assets/WordCrafter/letter_slot_correct.png"
		);
		this.load.image("mirror", "assets/WordCrafter/Mirror.png");
	}

	editorCreate(): void {
		this.events.emit("scene-awake");
	}

	create(): void {
		this.editorCreate();
		this.events.emit("updateUI", "show_exit_button");
		this.events.emit("updateUI", "change_background", "#ffffff");

		this.worldBounds = {
			x: this.padding.left,
			y: this.padding.top,
			width:
				this.cameras.main.width -
				(this.padding.left + this.padding.right),
			height:
				this.cameras.main.height -
				(this.padding.top + this.padding.bottom),
		};

		this.createBoundaryWalls();

		// Setup the 4-step flow
		const word = {
			image: "mirror",
			english: "mirror",
			spanish: "espejo",
		};

		this.puzzleSteps = [
			{ image: word.image, word: word.english, quiz: false },
			{ image: word.image, word: word.spanish, quiz: false },
			{ image: word.image, word: word.english, quiz: true },
			{ image: word.image, word: word.spanish, quiz: true },
		];

		// Add constraint
		this.matter.add.pointerConstraint({
			stiffness: 0.1,
			damping: 0.1,
			length: 0,
		});

		// Register input
		this.input.on("pointerup", (pointer:  Phaser.Input.Pointer) => {
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
		this.puzzle = new WordPuzzle(
			this,
			this.worldBounds,
			step.word,
			step.quiz
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
