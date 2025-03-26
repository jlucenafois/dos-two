import WordPuzzle from "./objects/WordPuzzle";

export default class WC_Game extends Phaser.Scene {
    private theme: string = "Mirror";
    private puzzle: WordPuzzle;
    private worldBounds: { width: number, height: number } = { width: 1728, height: 1117 };

    constructor() {
        super("WC_Game");
    }

    init({ theme }: { theme: string }): void {
        this.theme = theme;
    }

    preload() {
        // Load necessary assets
        this.load.image('letter-slot', 'assets/letter-slot.png');
    }

    editorCreate(): void {
        this.events.emit("scene-awake");
    }

    create(): void {
        this.editorCreate();
        this.events.emit("updateUI", "show_exit_button");
        this.events.emit("updateUI", "change_background", "#ffffff");

        // Configure physics - disable gravity
        this.matter.world.setGravity(0, 0);
        
        // Create solid boundary walls
        this.createBoundaryWalls();

        // Initialize the word puzzle with a target word
        // Using this.theme to select a word appropriate for the theme
        const targetWord = this.getWordForTheme(this.theme);
        this.puzzle = new WordPuzzle(this, targetWord, this.worldBounds);
        
        // Add a mouse spring for dragging
        this.matter.add.mouseSpring({
            stiffness: 0.1,
            damping: 0.1,
            length: 0
        });
    }

    getWordForTheme(theme: string): string {
        // Theme-based word selection
        const wordsByTheme: {[key: string]: string[]} = {
            "Mirror": ["REFLECT", "MIRROR", "IMAGE", "GLASS", "SHINE"],
            "Ocean": ["WAVES", "BEACH", "SHELL", "CORAL", "OCEAN"],
            "Forest": ["TREES", "LEAVES", "WOODS", "GREEN", "SHADE"]
        };
        
        const availableWords = wordsByTheme[theme] || ["PUZZLE", "WORDS", "LETTER", "GAME"];
        return availableWords[Math.floor(Math.random() * availableWords.length)];
    }

    createBoundaryWalls() {
        const thickness = 50;
        
        // Create walls inset from the boundaries
        this.matter.add.rectangle(thickness/2, this.worldBounds.height/2, thickness, this.worldBounds.height, { isStatic: true }); // Left
        this.matter.add.rectangle(this.worldBounds.width - thickness/2, this.worldBounds.height/2, thickness, this.worldBounds.height, { isStatic: true }); // Right
        this.matter.add.rectangle(this.worldBounds.width/2, thickness/2, this.worldBounds.width, thickness, { isStatic: true }); // Top
        this.matter.add.rectangle(this.worldBounds.width/2, this.worldBounds.height - thickness/2, this.worldBounds.width, thickness, { isStatic: true }); // Bottom
    }

    update() {
        // Update the puzzle state
        if (this.puzzle) {
            this.puzzle.update();
        }
    }
}