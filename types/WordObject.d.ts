export type WordObject = {
    textObject: Phaser.GameObjects.Text;
    startX: number;
    width: number;
    lineIndex: number;
    wordIndex: number;
    originalStyle: { color: string }; // Added to store original style
};