import LetterSlot from "./LetterSlot";

export default class LetterEntity {
	private scene: Phaser.Scene;
	private letter: string;
	private textObject: Phaser.GameObjects.Text;
	private body: MatterJS.BodyType;
	private locked: boolean = false;
	private slot: LetterSlot | null = null;
	private ejecting: boolean = false;

	constructor(
		scene: Phaser.Scene,
		x: number,
		y: number,
		letter: string,
		idx: number
	) {
		this.scene = scene;
		this.letter = letter;

		// Create text
		const fontStyle = {
			font: "bold 64px Arial",
			color: "#000000",
		};
		this.textObject = scene.add.text(x, y, letter, fontStyle).setOrigin(0.5);
		this.textObject.setInteractive();
		// this.textObject.setInteractive().addListener('pointerdown', (event) => {
		//     console.log('Started dragging:', event);
		// });

		// Create physics body
		const radius = 40;
		this.body = scene.matter.add.circle(x, y, radius, {
			label: `letter.${letter}.${idx}`,
			restitution: 0.6,
			friction: 0.1,
			frictionAir: 0.1,
		});

		// Connect text to physics body
		const object = scene.matter.add.gameObject(this.textObject, this.body);
		object.setInteractive();
	}

	getLetter(): string {
		return this.letter;
	}

	getBody(): MatterJS.BodyType {
		return this.body;
	}

	isLocked(): boolean {
		return this.locked;
	}

	lockToSlot(slot: LetterSlot): void {
		this.locked = true;
		this.slot = slot;

		// Move letter to slot position
		const slotPos = slot.getPosition();
		this.scene.matter.body.setPosition(this.body, slotPos);

		// Make the body static (unmovable)
		this.scene.matter.body.setStatic(this.body, true);

		// Visual feedback
		this.textObject.setColor("#00AA00");
	}

	// eject(fromPosition: { x: number; y: number }): void {
	eject(): void {
		// Calculate ejection direction (away from the slot)
		const currentPos = this.body.position;

		// Default angle if the positions are too close
		const ejectionAngle =  -Math.PI/2;

		// Calculate ejection velocity
		const ejectionForce = 0.2;
		const ejectionVector = {
			x: Math.cos(ejectionAngle) * ejectionForce,
			y: Math.sin(ejectionAngle) * ejectionForce,
		};

		// Apply force to eject the letter
		this.scene.matter.body.applyForce(this.body, currentPos, ejectionVector);

		// Flash the letter red
		this.textObject.setColor("#FF0000");

		// Return to normal color after a short delay
		this.ejecting = true;
		this.scene.time.delayedCall(300, () => {
			this.textObject.setColor("#000000");
			this.ejecting = false;
		});
	}

	update(): void {
		// Any per-frame updates

		// If ejecting, make sure the letter doesn't immediately dock again
		if (this.ejecting) {
			// Additional logic can be added here if needed
		}
	}
}
