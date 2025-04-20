export default class LetterText extends Phaser.GameObjects.Container {
    private letters: Phaser.GameObjects.Text[] = [];

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        text: string,
        style: Phaser.Types.GameObjects.Text.TextStyle = {},
        letterSpacing: number = 0
    ) {
        super(scene, x, y);
        scene.add.existing(this);

        let offsetX = 0;
        let maxHeight = 0;

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const letter = scene.add.text(0, 0, char, style).setOrigin(0);
            letter.setX(offsetX);
            this.add(letter);
            this.letters.push(letter);
            offsetX += letter.width + letterSpacing;
            maxHeight = Math.max(maxHeight, letter.height);
        }

        // Set width and height via Container's properties
        this.setSize(offsetX - letterSpacing, maxHeight);
    }

    public center(): void {
        this.setPosition(this.x - this.width / 2, this.y - this.height / 2);
    }

    public setLetterColor(index: number, color: string): void {
        if (index < 0 || index >= this.letters.length) return;
        this.letters[index].setColor(color);
    }

    public setAllColors(colors: string[]): void {
        for (let i = 0; i < this.letters.length; i++) {
            if (colors[i]) {
                this.letters[i].setColor(colors[i]);
            }
        }
    }

    public getLetter(index: number): Phaser.GameObjects.Text | undefined {
        return this.letters[index];
    }

    public destroy(fromScene?: boolean): void {
        this.letters.forEach(letter => letter.destroy());
        super.destroy(fromScene);
    }
}
