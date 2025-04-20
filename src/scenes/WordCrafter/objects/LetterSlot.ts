import LetterEntity from "./LetterEntity";

export default class LetterSlot extends Phaser.GameObjects.Container {
	public scene: Phaser.Scene;
	private targetLetter: string;
	private textObject: Phaser.GameObjects.Text;
	public filled = false;
	private rejectionTween: Phaser.Tweens.Tween | null = null;
	private sprite: Phaser.GameObjects.Sprite;

	constructor(
		scene: Phaser.Scene,
		x: number,
		y: number,
		targetLetter: string,
		idx: number
	) {
		super(scene, x, y);
		this.scene = scene;
		this.targetLetter = targetLetter;

		// Add to scene
		scene.add.existing(this);

		// Create sprite
		this.sprite = scene.add.sprite(0, 0, "letter_slot_default")
		this.add(this.sprite);

		// Create hidden letter text
		this.textObject = scene.add
			.text(0, 0, targetLetter, {
				font: "bold 64px Arial",
				color: "#a3a3a3",
			})
			.setOrigin(0.5)
			.setVisible(false);
		this.add(this.textObject);

		// Add Matter sensor body
		const width = 80;
		const height = 100;
		scene.matter.add.gameObject(this, {
			shape: {
				type: "rectangle",
				width,
				height,
			},
			isSensor: true,
			isStatic: true,
			label: `slot.${targetLetter}.${idx}`,
		});
	}

	public fill(letter: LetterEntity): boolean {
		if (this.filled) return false;

		if (letter.letter === this.targetLetter) {
			this.accept();
			letter.destroy();
			return true;
		} else {
			this.reject();
			letter.eject();
			return false;
		}
	}

	private accept(): void {
		this.filled = true;
		this.textObject.setVisible(true);
		this.textObject.setColor("#00AA00");
		this.sprite.setTexture("letter_slot_correct");
	}

	private reject(): void {
		if (this.rejectionTween) this.rejectionTween.stop();

		this.rejectionTween = this.scene.tweens.add({
			targets: this,
			x: { from: this.x - 5, to: this.x + 5 },
			ease: "Sine.easeInOut",
			duration: 100,
			repeat: 3,
			yoyo: true,
			onComplete: () => {
				this.setX(this.x); // Ensure reset
				this.sprite.setTexture("letter_slot_default");
				this.rejectionTween = null;
			},
		});
	}

	public update(): void {
		// Slot update logic if needed
	}
}
