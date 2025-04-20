import LetterEntity from "./LetterEntity";

export default class LetterSlot {
	private scene: Phaser.Scene;
	private targetLetter: string;
	private textObject: Phaser.GameObjects.Text;
	public filled: boolean = false;
	private body: MatterJS.BodyType;
	public position: { x: number; y: number };
	private rejectionTween: Phaser.Tweens.Tween | null = null;
	private sprite: Phaser.GameObjects.Sprite; // New sprite property

	constructor(
		scene: Phaser.Scene,
		x: number,
		y: number,
		targetLetter: string,
		idx: number
	) {
		this.scene = scene;
		this.targetLetter = targetLetter;
		this.position = { x, y };

		// Create sprite instead of graphics
		this.sprite = scene.add.sprite(x, y, "letter_slot_default");

		// Create text
		const fontStyle = {
			font: "bold 64px Arial",
			color: "#a3a3a3",
		};
		this.textObject = scene.add
			.text(x, y, targetLetter, fontStyle)
			.setOrigin(0.5);
		this.textObject.visible = false;

		// Create physics body - sensor means it detects collisions but doesn't physically block
		this.body = scene.matter.add.rectangle(x, y, 80, 100, {
			isSensor: true,
			isStatic: true,
			label: `slot.${targetLetter}.${idx}`,
			ignorePointer: true,
		});
	}

	fill(letter: LetterEntity) {
		if (this.filled) return;
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

	accept(): void {
		this.filled = true;
		this.body.collisionFilter.mask = 0;
		this.textObject.visible = true;
		this.textObject.setColor("#00AA00");

		// Change sprite texture to indicate filled state
		this.sprite.setTexture("letter_slot_correct");
	}

	reject(): void {
		// Stop any existing tween
		if (this.rejectionTween) {
			this.rejectionTween.stop();
		}

		// Create shake effect
		this.rejectionTween = this.scene.tweens.add({
			targets: this.sprite,
			x: { from: this.position.x - 5, to: this.position.x + 5 },
			ease: "Sine.easeInOut",
			duration: 100,
			repeat: 3,
			yoyo: true,
			onComplete: () => {
				// Reset position after shaking
				this.sprite.x = this.position.x;
				this.sprite.setTexture("letter_slot_default");
				this.rejectionTween = null;
			},
		});
	}

	update(): void {
		// Any per-frame updates if needed
	}
}
