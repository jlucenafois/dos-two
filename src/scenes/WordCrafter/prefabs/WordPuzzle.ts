import LetterEntity from "./LetterEntity";
import LetterSlot from "./LetterSlot";
import LetterBox from "./LetterBox";
import { WorldBounds } from "../WC_Game";

const slotSize = 80;
const gap = 10;

export default class WordPuzzle extends Phaser.GameObjects.Container {
	public scene: Phaser.Scene;
	private word: string;
	private worldBounds: WorldBounds;
	private letters: LetterEntity[] = [];
	private slots: (LetterSlot | LetterBox)[] = [];
	private center: { x: number; y: number } = { x: 0, y: 0 };
	private slotLeft: number;

	constructor(
		scene: Phaser.Scene,
		worldBounds: WorldBounds,
		word: string,
		quizMode: boolean
	) {
		super(scene);
		this.scene = scene;
		this.word = word.toLowerCase();
		this.slotLeft = word.length;
		this.worldBounds = worldBounds;
		this.center = {
			x: this.worldBounds.x + this.worldBounds.width / 2,
			y: this.worldBounds.y + this.worldBounds.height / 2,
		};

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
			this.add(box); // Add box to container
		}

		// these two lines have to be last in order for the floating letters to be rendered on top of everything else!!!
		this.createLetters();
		scene.add.existing(this);
	}

	private createLetterSlots() {
		const wordLength = this.word.length;
		const totalWidth = wordLength * slotSize + (wordLength - 1) * gap;
		const startX = this.center.x - totalWidth / 2;

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
			this.add(slot); // Add to container
		}
	}

	private createLetters() {
		const availableLetters = this.word.split("");

		const padding = 150;
		const minX = this.worldBounds.x + padding;
		const maxX = this.worldBounds.x + this.worldBounds.width - padding;
		const minY = this.worldBounds.y + padding;
		const maxY = this.worldBounds.y + this.worldBounds.height - padding;
		const avoidRange = 150;

		availableLetters.forEach((letter, i) => {
			let x = Phaser.Math.Between(minX, maxX);
			let y;
			do {
				y = Phaser.Math.Between(minY, maxY);
			} while (Math.abs(y - this.center.y) < avoidRange);

			const letterEntity = new LetterEntity(this.scene, x, y, letter, i);
			this.letters.push(letterEntity);
			this.add(letterEntity); // Add letter to container
			this.bringToTop(letterEntity);
		});
	}

	handlepointerup(
		body1: Phaser.Types.Physics.Matter.MatterBody,
		body2: Phaser.Types.Physics.Matter.MatterBody
	) {
		//@ts-expect-error
		const [typeA, , idxA] = body1.label.split(".");
		//@ts-expect-error
		const [typeB, , idxB] = body2.label.split(".");

		let slot, letter;

		if (typeA === "slot" && typeB === "letter") {
			slot = this.slots[parseInt(idxA)];
			letter = this.letters[parseInt(idxB)];
		} else if (typeA === "letter" && typeB === "slot") {
			slot = this.slots[parseInt(idxB)];
			letter = this.letters[parseInt(idxA)];
		} else {
			return;
		}

		if (slot.fill(letter)) this.slotLeft -= 1;
		if (this.slotLeft === 0) this.scene.events.emit("puzzleComplete");
	}

	update() {
		for (const letter of this.letters) {
            // only update if the letter is not destroyed yet
            if (letter.scene) letter.update();
		}
	}
    
    destroy(fromScene?: boolean) {
        for (const letter of this.letters) {
            letter.destroy(fromScene);
        }
        for (const slot of this.slots) {
            slot.destroy(fromScene);
        }
        this.letters = [];
        this.slots = [];
        super.destroy(fromScene);
    }
}
