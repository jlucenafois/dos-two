import LetterEntity from "./LetterEntity";
import LetterSlot from "./LetterSlot";
import { worldBounds } from "../WC_Game";

export default class WordPuzzle {
	private scene: Phaser.Scene;
	private word: string;
	private letters: LetterEntity[] = [];
	private slots: LetterSlot[] = [];
	private isComplete: boolean = false;
	private worldBounds: worldBounds;

	constructor(scene: Phaser.Scene, word: string, worldBounds: worldBounds) {
		this.scene = scene;
		this.word = word.toLowerCase();
		this.worldBounds = worldBounds;

		this.createLetterSlots();
		this.createLetters();

		// Set up collision detection
		this.setupCollisions();
	}

	private createLetterSlots() {
		const slotSize = 80;
		const wordLength = this.word.length;
		const totalWidth = wordLength * slotSize + (wordLength - 1) * 10; // 10px spacing
		const startX =
			this.worldBounds.x + (this.worldBounds.width - totalWidth) / 2;
		const y = this.worldBounds.y + this.worldBounds.height / 2;

		// Create slots for each letter
		for (let i = 0; i < this.word.length; i++) {
			const x = startX + i * (slotSize + 10) + slotSize / 2;
			const slot = new LetterSlot(this.scene, x, y, this.word[i]);
			this.slots.push(slot);
		}
	}

	private createLetters() {
		const availableLetters = this.word.split("");

		// Parameters for random placement
		const padding = 150;
		const minX = this.worldBounds.x + padding;
		const maxX = this.worldBounds.x + this.worldBounds.width - padding;
		const minY = this.worldBounds.y + padding;
		const maxY = this.worldBounds.y + this.worldBounds.height - padding;

		// Avoid placing letters in the center area where slots are
		const avoidCenterY = this.worldBounds.y + this.worldBounds.height / 2;
		const avoidRange = 150;

		// Create letter entities
		availableLetters.forEach((letter) => {
			// Get position away from the center
			let x = Phaser.Math.Between(minX, maxX);
			let y;
			do {
				y = Phaser.Math.Between(minY, maxY);
			} while (Math.abs(y - avoidCenterY) < avoidRange);

			const letterEntity = new LetterEntity(this.scene, x, y, letter);
			this.letters.push(letterEntity);
		});
	}

	// private setupCollisions() {
	// 	// Listen for collision events
	// 	this.scene.matter.world.on(
	// 		"collisionstart",
	// 		(event: Phaser.Physics.Matter.Events.CollisionStartEvent) => {
	// 			event.pairs.forEach((pair) => {
	// 				const bodyA = pair.bodyA;
	// 				const bodyB = pair.bodyB;

	// 				// Check if this is a letter-slot collision
	// 				this.checkLetterSlotCollision(bodyA, bodyB);
	// 			});
	// 		}
	// 	);
	// }

	// private checkLetterSlotCollision(
	// 	bodyA: MatterJS.BodyType,
	// 	bodyB: MatterJS.BodyType
	// ) {
	// 	// Find which is the letter and which is the slot
	// 	let letter: LetterEntity | null = null;
	// 	let slot: LetterSlot | null = null;

	// 	// Check if bodyA is a letter
	// 	this.letters.forEach((l) => {
	// 		if (l.getBody() === bodyA) letter = l;
	// 	});

	// 	// Check if bodyB is a letter
	// 	if (!letter) {
	// 		this.letters.forEach((l) => {
	// 			if (l.getBody() === bodyB) letter = l;
	// 		});
	// 	}

	// 	// Check if bodyA is a slot
	// 	this.slots.forEach((s) => {
	// 		if (s.getBody() === bodyA) slot = s;
	// 	});

	// 	// Check if bodyB is a slot
	// 	if (!slot) {
	// 		this.slots.forEach((s) => {
	// 			if (s.getBody() === bodyB) slot = s;
	// 		});
	// 	}

	// 	// If we have both a letter and a slot, check for match
	// 	if (letter && slot && !letter.isLocked() && !slot.isFilled()) {
	// 		if (letter.getLetter() === slot.getTargetLetter()) {
	// 			// Correct match - lock letter to slot
	// 			slot.fill(letter);
	// 			letter.lockToSlot(slot);

	// 			// Check if puzzle is complete
	// 			this.checkCompletion();
	// 		} else {
	// 			// Wrong match - provide feedback
	// 			slot.showRejection();
	// 			letter.eject(slot.getPosition());
	// 		}
	// 	}
	// }

	// private checkCompletion() {
	// 	const allFilled = this.slots.every((slot) => slot.isFilled());
	// 	if (allFilled && !this.isComplete) {
	// 		this.isComplete = true;
	// 		console.log("Puzzle complete!");
	// 		// Trigger completion events, animations, etc.
	// 		this.scene.events.emit("puzzleComplete");
	// 	}
	// }

	update() {
		// Update all letters
		this.letters.forEach((letter) => letter.update());

		// Update all slots
		this.slots.forEach((slot) => slot.update());
	}
}
