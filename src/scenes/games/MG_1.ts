// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import MG_Base from "./MG_Base";
/* END-USER-IMPORTS */

// Define the CardKey type globally - idk
type CardKey = "bed_card" | "cama_card" | "lamp_card" | "lampara_card" | "mirror_card" | "espejo_card";

export default class MG_1 extends MG_Base {

    private unflipped: Phaser.GameObjects.Image;
    private unflipped_1: Phaser.GameObjects.Image;
    private unflipped_2: Phaser.GameObjects.Image;
    private unflipped_3: Phaser.GameObjects.Image;
    private unflipped_4: Phaser.GameObjects.Image;
    private unflipped_5: Phaser.GameObjects.Image;
    private progressBar: Phaser.GameObjects.Image;
    private matchedPairs: Set<String>;
    private hover_unflipped: Phaser.GameObjects.Image;
    private blinking: Phaser.GameObjects.Image;

    constructor() {
        super("MG_1");
        this.matchedPairs = new Set();
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    editorCreate(): void {
        // _0_progress_bar_lg
		this.progressBar = this.add.image(873, 198, "0_progress_bar_lg");

		// blinking
		this.blinking = this.add.image(1728, 1117, "blinking");
		this.blinking.setOrigin(1, 1);
        this.blinking.setVisible(false);

        // unflipped 
        this.unflipped = this.add.image(633, 421, "unflipped");

        // unflipped_1
        this.unflipped_1 = this.add.image(889, 421, "unflipped");

        // unflipped_2
        this.unflipped_2 = this.add.image(1145, 421, "unflipped");

        // unflipped_3
        this.unflipped_3 = this.add.image(633, 677, "unflipped");

        // unflipped_4
        this.unflipped_4 = this.add.image(889, 677, "unflipped");

        // unflipped_5
        this.unflipped_5 = this.add.image(1145, 677, "unflipped");

        // hover_unflipped
        this.hover_unflipped = this.add.image(633, 421, "hover_unflipped");
        this.hover_unflipped.setVisible(false);

        // mgsubtitle
		this.add.image(885, 933, "mgsubtitle");

        // Function to add hover effect
        const addHover = (card: Phaser.GameObjects.Image) => {
            card.setInteractive({
                useHandCursor: true,
                pixelPerfect: true
            });
            card.on("pointerover", () => {
                // Only hover_unflipped if state is unflipped
                if (card.texture.key === "unflipped"){
                    this.hover_unflipped.setPosition(card.x, card.y);
                    this.hover_unflipped.setVisible(true);
                }
            });
            card.on("pointerout", () => {
                this.hover_unflipped.setVisible(false);
            });
        };

        // Add hover effect to all cards
        addHover(this.unflipped);
        addHover(this.unflipped_1);
        addHover(this.unflipped_2);
        addHover(this.unflipped_3);
        addHover(this.unflipped_4);
        addHover(this.unflipped_5);

        this.events.emit("scene-awake");
    }

    create() {
        super.create();
        this.editorCreate();
        this.events.emit("updateUI", "show_exit_button");
        this.anims.create({
            key: "drag_mouse_anim",
            frames: this.anims.generateFrameNumbers("drag_mouse", { start: 0, end: 15 }),
            frameRate: 10,
            repeat: -1,
        })

        // Girl Blinking 
        this.blinking.setVisible(true);
        this.blinking.setAlpha(1);
        this.blinking.setDepth(1);

        // Blinking Animation
        const blinkingTextures = ["blinking", "blinkingtwo", "blinkingthree"];
        let currentTextureIndex = 0;

        const changeBlinkingTexture = () => {
            // Update the texture
            this.blinking.setTexture(blinkingTextures[currentTextureIndex]);
        
            // Move to the next texture
            currentTextureIndex = (currentTextureIndex + 1) % blinkingTextures.length;
        
            // Schedule the next texture change
            const delay = currentTextureIndex === 1 ? 1000 : 100; // Freeze on index 1
            this.time.delayedCall(delay, changeBlinkingTexture);
        };

        // Start the blinking animation
        changeBlinkingTexture();

        // Add a semi-transparent overlay to darken the screen
        const overlay = this.add.rectangle(0, 0, this.scale.width, this.scale.height, 0x000000, 0.7);
        overlay.setOrigin(0, 0);
        
        // Highlight the top-right card (unflipped_2)
        this.unflipped_2.setAlpha(1); // Ensure it's fully visible
        this.unflipped_2.setDepth(1); // Bring it above the overlay
    
        // Assign tutorial textures to the two cards
        this.unflipped_2.setData("flippedCard", "tutorial_card");
        this.unflipped_4.setData("flippedCard", "tutorial_card_e");
    
        // Add an animated mouse pointer
        const mousePointer = this.add.sprite(this.unflipped_2.x, this.unflipped_2.y, "drag_mouse");
        mousePointer.setAlpha(1);
        mousePointer.setDepth(1);
        mousePointer.setOrigin(0.5, 0.5); // Set origin to center for proper rotation

        // Play the animation
        mousePointer.play("drag_mouse_anim");
    
        // Animate the mouse pointer to simulate a click
        this.tweens.add({
            targets: mousePointer,
            x: this.unflipped_2.x,
            y: this.unflipped_2.y,
            duration: 1000,
            onComplete: () => {
                // Simulate flipping the first card
                this.flipCard(this.unflipped_2);
    
                // Move the pointer to the matching card
                const matchingCard = this.unflipped_4; // Example: Match with unflipped_4
                matchingCard.setAlpha(1);
                matchingCard.setDepth(1);
                this.tweens.add({
                    targets: mousePointer,
                    x: matchingCard.x,
                    y: matchingCard.y,
                    duration: 1000,
                    onComplete: () => {
                        // Simulate flipping the matching card
                        this.flipCard(matchingCard);
    
                        // Make the matched cards disappear
                        this.time.delayedCall(1000, () => {
                            this.unflipped_2.setVisible(false);
                            this.unflipped_4.setVisible(false);
                            matchingCard.setVisible(false);
    
                            // Reset the game after the tutorial
                            this.time.delayedCall(1000, () => {
                            overlay.destroy();
                            mousePointer.destroy();
                                this.resetGame();
                                this.blinking.setVisible(false);
                            });
                        });
                    },
                });
            },
        });
    }

    setupMemoryGame() {
        // Define the CardKey type outside the class
        const cards = ["bed_card", "cama_card", "lamp_card", "lampara_card", "mirror_card", "espejo_card"];
        Phaser.Utils.Array.Shuffle(cards);

        const unflippedCards = [
            this.unflipped,
            this.unflipped_1,
            this.unflipped_2,
            this.unflipped_3,
            this.unflipped_4,
            this.unflipped_5,
        ];

        unflippedCards.forEach((card, index) => {
            card.setTexture("unflipped");
            card.setData("key", cards[index]);
            card.setData("flippedCard", cards[index]);
            card.setData("flipped", false);
            card.setInteractive();
        });

        let flippedCards: Phaser.GameObjects.Image[] = [];

        unflippedCards.forEach((card) => {
            card.on("pointerdown", () => {
                if (flippedCards.length < 2 && !card.getData("flipped")) {
                    card.setTexture(card.getData("flippedCard")); // bruh
                    this.hover_unflipped.setVisible(false); // bruh x2
                    this.flipCard(card);
                    flippedCards.push(card);

                    if (flippedCards.length === 2) {
                        this.time.delayedCall(900, () => {
                            this.checkMatch(flippedCards);
                            flippedCards = [];
                            card.setInteractive(false);
                        });
                    }
                }
            });
        });
    }

    flipCard(card: Phaser.GameObjects.Image) {
        // Animate the card to shrink horizontally (simulate flipping)
        this.tweens.add({
            targets: card,
            scaleX: 0, // Shrink the card's width to 0
            duration: 150, // Duration of the first half of the flip
            onComplete: () => {
                // Change the card's texture when it's "invisible"
                card.setTexture(card.getData("flippedCard"));
    
                // Animate the card to grow back to its original width
                this.tweens.add({
                    targets: card,
                    scaleX: 1, // Restore the card's width
                    duration: 150, // Duration of the second half of the flip
                });
            },
        });
    
        // Mark the card as flipped
        card.setData("flipped", true);
    }

    flipCardBack(card: Phaser.GameObjects.Image) {
        // Animate the card to shrink horizontally (simulate flipping back)
        this.tweens.add({
            targets: card,
            scaleX: 0, // Shrink the card's width to 0
            duration: 150, // Duration of the first half of the flip
            onComplete: () => {
                // Change the card's texture back to "unflipped" when it's "invisible"
                card.setTexture("unflipped");
    
                // Animate the card to grow back to its original width
                this.tweens.add({
                    targets: card,
                    scaleX: 1, // Restore the card's width
                    duration: 150, // Duration of the second half of the flip
                });
            },
        });
    
        // Mark the card as not flipped
        card.setData("flipped", false);
    }

    checkMatch(cards: Phaser.GameObjects.Image[]) {
        const [card1, card2] = cards;

        const matchedPair: Record<CardKey, CardKey> = {
            "bed_card": "cama_card",
            "cama_card": "bed_card",
            "lamp_card": "lampara_card",
            "lampara_card": "lamp_card",
            "mirror_card": "espejo_card",
            "espejo_card": "mirror_card",
        };

        const key1 = card1.getData("key") as CardKey;
        const key2 = card2.getData("key") as CardKey;

        if (matchedPair[key1] === key2 || matchedPair[key2] === key1) {
            this.matchedPairs.add(key1);
            this.matchedPairs.add(key2);
            card1.setVisible(false);
            card2.setVisible(false);
            
            // for each of 3 matches get progress bar to 100, for this start at 25_progress_bar_lg, 75_progress_bar_lg, 100_progress_bar_lg
            const progressTexture = [
                "0_progress_bar_lg",
                "25_progress_bar_lg",
                "75_progress_bar_lg",
                "100_progress_bar_lg",
            ];
            const progressIndex = Math.min(this.matchedPairs.size /2, 3);
            this.progressBar.setTexture(progressTexture[progressIndex]);
        } else {
            this.time.delayedCall(1000, () => {
                this.flipCardBack(card1);
                this.flipCardBack(card2);
                this.hover_unflipped.setVisible(true);
            });
        }

        if (this.matchedPairs.size === 6) {
            this.time.delayedCall(500, () => {
                this.endGame();
            });
        }
    }

    endGame() {
        // animations 

        // quit or keep playing screen
        this.matchedPairs.clear();
        this.setupMemoryGame();
    }

    resetGame() {
        // Clear matched pairs
        this.matchedPairs.clear();
    
        // Reset all cards to their initial state
        const unflippedCards = [
            this.unflipped,
            this.unflipped_1,
            this.unflipped_2,
            this.unflipped_3,
            this.unflipped_4,
            this.unflipped_5,
        ];
    
        unflippedCards.forEach((card) => {
            card.setTexture("unflipped");
            card.setData("flipped", false);
            card.setVisible(true);
            card.setInteractive();
        });
    
        // Start a new game
        this.setupMemoryGame();
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here