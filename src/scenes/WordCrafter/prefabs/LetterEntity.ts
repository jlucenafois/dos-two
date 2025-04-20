export default class LetterEntity extends Phaser.GameObjects.Text {
	public letter: string;
	private bodyRef: MatterJS.BodyType;
	private locked = false;

	constructor(
		scene: Phaser.Scene,
		x: number,
		y: number,
		letter: string,
		idx: number
	) {
		super(scene, x, y, letter, {
			font: "bold 64px Arial",
			color: "#000000",
		});

		this.letter = letter;
		this.setOrigin(0.5);
		this.setInteractive();

		// Add this Text object to the scene
		scene.add.existing(this);

		// Add physics body to the text object
		const radius = 40;
		scene.matter.add.gameObject(this, {
			shape: {
				type: "circle",
				radius,
			},
			label: `letter.${letter}.${idx}`,
			restitution: 0.6,
			friction: 0.1,
			frictionAir: 0.1,
			angle: 0,
		});

		this.bodyRef = this.body as MatterJS.BodyType;
	}

	public eject(): void {
		const ejectionAngle = -Math.PI / 2;
		const force = 0.2;

		const vector = {
			x: Math.cos(ejectionAngle) * force,
			y: Math.sin(ejectionAngle) * force,
		};

		this.scene.matter.body.applyForce(
			this.bodyRef,
			this.bodyRef.position,
			vector
		);

		this.setColor("#FF0000");
		this.scene.time.delayedCall(300, () => {
			if (!this.locked) {
				this.setColor("#000000");
			}
		});
	}

	public update(): void {
		if (this.locked) return;

		const MAX_ANGLE = Phaser.Math.DegToRad(30);
		const current = this.bodyRef.angle;

		if (current > MAX_ANGLE) {
			this.scene.matter.body.setAngle(this.bodyRef, MAX_ANGLE, false);
			this.scene.matter.body.setAngularVelocity(this.bodyRef, 0);
		} else if (current < -MAX_ANGLE) {
			this.scene.matter.body.setAngle(this.bodyRef, -MAX_ANGLE, false);
			this.scene.matter.body.setAngularVelocity(this.bodyRef, 0);
		}
	}
}
