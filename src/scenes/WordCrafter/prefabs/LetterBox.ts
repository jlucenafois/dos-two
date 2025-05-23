import Letter from "./LetterEntity";
import LetterText from "./LetterText";

export default class LetterBox extends Phaser.GameObjects.Container {
	public scene: Phaser.Scene;
	private textObject: LetterText;
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
        this.textObject=new LetterText(scene, x, y, word, {
            font: "bold 64px Arial",
            color: "#a3a3a3",
        });
        this.textObject.center();

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
            collisionFilter: {
                mask: 0
            }
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
        this.textObject.setLetterColor(this.curLetterIdx, "#00AA00")
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

    destroy(fromScene?: boolean): void {
        // Stop any running tweens to prevent callbacks after destruction
        if (this.rejectionTween) {
            this.rejectionTween.stop();
            this.rejectionTween = null;
        }
        this.textObject.destroy(fromScene);
        super.destroy(fromScene);
    }
}
