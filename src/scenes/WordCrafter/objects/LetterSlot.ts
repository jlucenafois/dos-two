import LetterEntity from './LetterEntity';

export default class LetterSlot {
    private scene: Phaser.Scene;
    private targetLetter: string;
    private filled: boolean = false;
    private filledBy: LetterEntity | null = null;
    private body: MatterJS.BodyType;
    private graphics: Phaser.GameObjects.Graphics;
    private position: { x: number, y: number };
    private rejectionTween: Phaser.Tweens.Tween | null = null;
    
    constructor(scene: Phaser.Scene, x: number, y: number, targetLetter: string) {
        this.scene = scene;
        this.targetLetter = targetLetter;
        this.position = { x, y };
        
        // Create visual representation
        this.graphics = scene.add.graphics();
        this.drawSlot('#AAAAAA'); // Gray when empty
        
        // Create physics body - sensor means it detects collisions but doesn't physically block
        this.body = scene.matter.add.rectangle(x, y, 70, 70, {
            isSensor: true,
            isStatic: true,
            label: `slot_${targetLetter}`
        });
    }
    
    getTargetLetter(): string {
        return this.targetLetter;
    }
    
    getBody(): MatterJS.BodyType {
        return this.body;
    }
    
    getPosition(): { x: number, y: number } {
        return this.position;
    }
    
    isFilled(): boolean {
        return this.filled;
    }
    
    fill(letter: LetterEntity): void {
        this.filled = true;
        this.filledBy = letter;
        
        // Change appearance to indicate filled state
        this.drawSlot('#00AA00'); // Green when filled correctly
    }
    
    showRejection(): void {
        // Stop any existing tween
        if (this.rejectionTween) {
            this.rejectionTween.stop();
        }
        
        // Change color to red
        this.drawSlot('#FF0000');
        
        // Create shake effect
        const originalX = this.position.x;
        
        this.rejectionTween = this.scene.tweens.add({
            targets: this.graphics,
            x: { from: originalX - 5, to: originalX + 5 },
            ease: 'Sine.easeInOut',
            duration: 100,
            repeat: 3,
            yoyo: true,
            onComplete: () => {
                // Reset position and color after shaking
                this.graphics.x = 0;
                this.drawSlot('#AAAAAA');
                this.rejectionTween = null;
            }
        });
    }
    
    private drawSlot(color: string): void {
        this.graphics.clear();
        this.graphics.lineStyle(3, 0x000000);
        this.graphics.fillStyle(Phaser.Display.Color.HexStringToColor(color).color, 0.3);
        this.graphics.strokeRect(this.position.x - 35, this.position.y - 35, 70, 70);
        this.graphics.fillRect(this.position.x - 35, this.position.y - 35, 70, 70);
    }
    
    update(): void {
        // Any per-frame updates if needed
    }
}