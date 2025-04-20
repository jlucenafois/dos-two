import LetterSlot from "./LetterSlot";

export default class LetterEntity {
	private scene: Phaser.Scene;
	public letter: string;
	private textObject: Phaser.GameObjects.Text;
	private body: MatterJS.BodyType;
	private locked: boolean = false;

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

		// Create physics body
		const radius = 40;
		this.body = scene.matter.add.circle(x, y, radius, {
			label: `letter.${letter}.${idx}`,
			restitution: 0.6,
			friction: 0.1,
			frictionAir: 0.1,
			angle: 0, // Start with no rotation
		});

		// Connect text to physics body
		const object = scene.matter.add.gameObject(this.textObject, this.body);
		object.setInteractive();
	}


	lockToSlot(slot: LetterSlot): void {
		this.locked = true;
		this.scene.matter.world.remove(this.body);
		this.textObject.destroy();
		slot.fill();
	}

	eject(): void {
		// Calculate ejection direction (away from the slot)
		const currentPos = this.body.position;

		// Default angle if the positions are too close
		const ejectionAngle = -Math.PI / 2;

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
		// Constrain rotation between -30 and 30 degrees
		if (!this.locked) {
			const MAX_ANGLE = 30 * (Math.PI / 180); // Convert to radians
			const currentAngle = this.body.angle;

			if (currentAngle > MAX_ANGLE) {
				this.scene.matter.body.setAngle(this.body, MAX_ANGLE);
				this.scene.matter.body.setAngularVelocity(this.body, 0);
			} else if (currentAngle < -MAX_ANGLE) {
				this.scene.matter.body.setAngle(this.body, -MAX_ANGLE);
				this.scene.matter.body.setAngularVelocity(this.body, 0);
			}
		}
	}
}
