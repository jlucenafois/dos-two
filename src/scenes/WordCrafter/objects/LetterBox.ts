import Letter from "./LetterEntity";

export default class LetterBox extends Phaser.GameObjects.Container {
	public scene: Phaser.Scene;
	private textObject: Phaser.GameObjects.Text;
	public filled: boolean = false;
	private rejectionTween: Phaser.Tweens.Tween | null = null;
	private word: string;
	private curLetterIdx = 0;

	constructor(scene: Phaser.Scene, word: string, x: number, y: number) {
		super(scene, x, y);
		this.scene = scene;
		this.word = word;

		scene.add.existing(this);

		// Create text object and add to container
		this.textObject = scene.add
			.text(0, 0, word, {
				font: "bold 64px Arial",
				color: "#a3a3a3",
			})
			.setOrigin(0.5);
		this.add(this.textObject);

		// Create sensor body matching the text size
		const width = this.textObject.displayWidth + 40;
		const height = this.textObject.displayHeight + 20;

		scene.matter.add.gameObject(this, {
			shape: {
				type: "rectangle",
				width,
				height,
			},
			isSensor: true,
			isStatic: true,
			label: `slot.${word}.0`,
		});
	}

	public fill(letter: Letter): boolean {
		if (letter.letter === this.word[this.curLetterIdx]) {
			this.accept();
			letter.destroy();
			this.curLetterIdx += 1;
			if (this.curLetterIdx >= this.word.length) {
				this.filled = true;
			}
			return true;
		} else {
			this.reject();
			letter.eject();
			return false;
		}
	}

	private accept(): void {
		// TODO: Visual feedback
		// e.g. this.textObject.setColor("#00AA00");
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
				this.setX(this.x); // Reset X just in case
				this.rejectionTween = null;
			},
		});
	}

	public update(): void {
		// Update logic if needed
	}
}
