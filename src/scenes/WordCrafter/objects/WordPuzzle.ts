import LetterEntity from "./LetterEntity";
import LetterSlot from "./LetterSlot";
import LetterBox from "./LetterBox";
import { worldBounds } from "../WC_Game";

const slotSize = 80;
const gap = 15;

export default class WordPuzzle {
	private scene: Phaser.Scene;
	private word: string;
	private worldBounds: worldBounds;
	private letters: LetterEntity[] = [];
	private slots: (LetterSlot | LetterBox)[] = [];
	private center: { x: number; y: number } = { x: 0, y: 0 };
	private slotLeft: number;

	constructor(
		scene: Phaser.Scene,
		worldBounds: worldBounds,
		image: string,
		word: string,
		quizMode: boolean
	) {
		this.scene = scene;
		this.word = word.toLowerCase();
		this.slotLeft = word.length;
		this.worldBounds = worldBounds;
		this.center = {
			x: this.worldBounds.x + this.worldBounds.width / 2,
			y: this.worldBounds.y + this.worldBounds.height / 2,
		};

		this.createLetters();
		scene.add.sprite(0, 0, image);

		if (quizMode) {
			this.createLetterSlots();
		} else {
			const box = new LetterBox(
				this.scene,
				this.word,
				this.center.x,
				this.center.y
			);
			this.slots.push(box);
		}
	}

	private createLetterSlots() {
		const wordLength = this.word.length;
		const totalWidth = wordLength * slotSize + (wordLength - 1) * gap;
		const startX = this.center.x - totalWidth / 2;

		// Create slots for each letter
		for (let i = 0; i < this.word.length; i++) {
			const x = startX + i * (slotSize + gap) + slotSize / 2;
			const slot = new LetterSlot(
				this.scene,
				x,
				this.center.y,
				this.word[i],
				i
			);
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
		const avoidRange = 150;

		// Create letter entities
		availableLetters.forEach((letter, i) => {
			// Get position away from the center
			let x = Phaser.Math.Between(minX, maxX);
			let y;
			do {
				y = Phaser.Math.Between(minY, maxY);
			} while (Math.abs(y - this.center.y) < avoidRange);

			const letterEntity = new LetterEntity(this.scene, x, y, letter, i);
			this.letters.push(letterEntity);
		});
	}

	handlepointerup(
		body1: Phaser.Types.Physics.Matter.MatterBody,
		body2: Phaser.Types.Physics.Matter.MatterBody
	) {
		const [typeA, letterA, idxA] = body1.label.split(".");
		const [typeB, letterB, idxB] = body2.label.split(".");

		// Determine which is the slot and which is the letter
		let slot, letter;

		if (typeA === "slot" && typeB === "letter") {
			slot = this.slots[idxA];
			letter = this.letters[idxB];
		} else if (typeA === "letter" && typeB === "slot") {
			slot = this.slots[idxB];
			letter = this.letters[idxA];
		} else {
			return; // not a valid slot-letter collision
		}

		if (slot.fill(letter)) this.slotLeft -= 1;
		if (this.slotLeft === 0) this.scene.events.emit("puzzleComplete");
	}

	update() {
		for (const letter of this.letters) {
			letter.update();
		}
	}

    destroy() {
    }
}
