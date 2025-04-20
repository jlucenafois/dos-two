import LetterEntity from "./LetterEntity";

export default class LetterBox {
	private scene: Phaser.Scene;
	private textObject: Phaser.GameObjects.Text;
	public filled: boolean = false;
	private body: MatterJS.BodyType;
	public position: { x: number; y: number };
	private rejectionTween: Phaser.Tweens.Tween | null = null;
	private word: string;
	private curLetterIdx = 0;

	constructor(scene: Phaser.Scene, word: string, x: number, y: number) {
		this.scene = scene;
		this.word = word;

		// Create text
		const fontStyle = {
			font: "bold 64px Arial",
			color: "#a3a3a3",
		};
		this.textObject = scene.add.text(x, y, word, fontStyle).setOrigin(0.5)

		// Create physics body - sensor means it detects collisions but doesn't physically block
		this.body = scene.matter.add.rectangle(
			x,
			y,
			this.textObject.displayWidth + 40,
			this.textObject.displayHeight + 20,
			{
				isSensor: true,
				isStatic: true,
				label: `slot.${word}.${0}`,
				ignorePointer: true,
			}
		);
	}

	fill(letter: LetterEntity) {
		if (letter.letter === this.word[this.curLetterIdx]) {
			this.accept();
			letter.destroy();
			this.curLetterIdx += 1;
            return true;
		} else {
			this.reject();
			letter.eject();
            return false;
		}
	}

	accept(): void {
		// this.textObject.setColor("#00AA00");
	}

	reject(): void {}

	update(): void {
		// Any per-frame updates if needed
	}

    destroy() {
    }
}
