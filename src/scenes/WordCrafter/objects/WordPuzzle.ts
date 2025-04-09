import LetterEntity from "./LetterEntity";
import LetterSlot from "./LetterSlot";
import { worldBounds } from "../WC_Game";
export default class WordPuzzle {
	private scene: Phaser.Scene;
	private word: string;
	private worldBounds: worldBounds;
	private letters: LetterEntity[] = [];
	private slots: LetterSlot[] = [];

	constructor(scene: Phaser.Scene, word: string, worldBounds: worldBounds) {
		this.scene = scene;
		this.word = word.toLowerCase();
		this.worldBounds = worldBounds;

		this.createLetterSlots();
		this.createLetters();
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
			const slot = new LetterSlot(this.scene, x, y, this.word[i], i);
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
		availableLetters.forEach((letter, i) => {
			// Get position away from the center
			let x = Phaser.Math.Between(minX, maxX);
			let y;
			do {
				y = Phaser.Math.Between(minY, maxY);
			} while (Math.abs(y - avoidCenterY) < avoidRange);

			const letterEntity = new LetterEntity(this.scene, x, y, letter, i);
			this.letters.push(letterEntity);
		});
	}

	handlepointerup(
		body1: Phaser.Types.Physics.Matter.MatterBody,
		body2: Phaser.Types.Physics.Matter.MatterBody
	) {
		const [type1, letter1, idx1] = body1.label.split(".");
		const [type2, letter2, idx2] = body2.label.split(".");
		if (type1 !== "slot" || type2 !== "letter") return;

		const slot = this.slots[idx1];
		const letter = this.letters[idx2];

		if (letter1 === letter2) {
			slot.fill();
			letter.lockToSlot(slot);
		} else if (!slot.filled) {
			slot.showRejection();
			letter.eject();
		}
	}

	update() {
		for (const letter of this.letters) {
			letter.update();
		}
	}
}
