import { MouseConstraint } from "matter";
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

	constructor() {
		super("WC_Game");
	}

	init({ theme }: { theme: string }): void {
		this.theme = theme;
	}

	preload() {
		this.load.image("letter-slot", "assets/letter-slot.png");
	}

	editorCreate(): void {
		this.events.emit("scene-awake");
	}

	create(): void {
		this.editorCreate();
		this.events.emit("updateUI", "show_exit_button");
		this.events.emit("updateUI", "change_background", "#ffffff");

		// Configure physics - disable gravity
		this.matter.world.setGravity(0, 0);

		// Calculate world bounds dynamically based on screen dimensions and padding
		this.worldBounds = {
			x: this.padding.left,
			y: this.padding.top,
			width: this.cameras.main.width - (this.padding.left + this.padding.right),
			height:
				this.cameras.main.height - (this.padding.top + this.padding.bottom),
		};

		// Create solid boundary walls
		this.createBoundaryWalls();

		// Initialize the word puzzle with a target word
		// Using this.theme to select a word appropriate for the theme
		const targetWord = "henry";
		this.puzzle = new WordPuzzle(this, targetWord, this.worldBounds);

		this.matter.add.pointerConstraint({
			stiffness: 0.1,
			damping: 0.1,
			length: 0,
		});

		this.input.on("pointerdown", (pointer) => {
			const bodies = this.matter.intersectPoint(pointer.x, pointer.y);
			if (bodies.length > 0) {
				this.puzzle.handlepointerdown(bodies[0]);
			}
		});

		this.input.on("pointerup", (pointer) => {
			const bodies = this.matter.intersectPoint(pointer.x, pointer.y);
			if (bodies.length > 0) {
				this.puzzle.handlepointerup(bodies[0]);
			}
		});
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

	update() {}
}
