// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { CURRENT_SETTINGS } from "../settings";
import MG_Base from "./MG_Base";
/* END-USER-IMPORTS */

export default class MG_1 extends MG_Base {

    private unflipped: Phaser.GameObjects.Image;
    private unflipped_1: Phaser.GameObjects.Image;
    private unflipped_2: Phaser.GameObjects.Image;
    private unflipped_3: Phaser.GameObjects.Image;
    private unflipped_4: Phaser.GameObjects.Image;
    private unflipped_5: Phaser.GameObjects.Image;
    private progressBar: Phaser.GameObjects.Image;
    private matchedPairs: Set<String>;

    constructor() {
        super("MG_1");
        this.matchedPairs = new Set();
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    editorCreate(): void {

        // _0_progress_bar_lg
        this.progressBar = this.add.image(902, 135, "0_progress_bar_lg");

        // unflipped 
        this.unflipped = this.add.image(557, 473, "unflipped");

        // unflipped_1
        this.unflipped_1 = this.add.image(877, 473, "unflipped");

        // unflipped_2
        this.unflipped_2 = this.add.image(1197, 473, "unflipped");

        // unflipped_3
        this.unflipped_3 = this.add.image(557, 747, "unflipped");

        // unflipped_4
        this.unflipped_4 = this.add.image(877, 747, "unflipped");

        // unflipped_5
        this.unflipped_5 = this.add.image(1197, 747, "unflipped");

        // hover_unflipped
        const hover_unflipped = this.add.image(557, 473, "hover_unflipped");
        hover_unflipped.setVisible(false);

        // Function to add hover effect
        const addHover = (card: Phaser.GameObjects.Image) => {
            card.setInteractive({
                useHandCursor: true,
                pixelPerfect: true
            });
            card.on("pointerover", () => {
                // Only hover_unflipped if state is unflipped
                if (card.texture.key === "unflipped"){
                    hover_unflipped.setPosition(card.x, card.y);
                    hover_unflipped.setVisible(true);
                }
            });
            card.on("pointerout", () => {
                hover_unflipped.setVisible(false);
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
        this.editorCreate();
        this.events.emit("updateUI"); // can't get show_exit_button without going striaght to OB_1
        CURRENT_SETTINGS.gameState.prevScene = "DD_0";
        this.events.on("back_arrow_clicked", () => {
            this.scene.stop("MG_1");
            this.scene.start("DD_0"); // Navigate to DD_0
        });
        this.addTitle();
    }

    setupMemoryGame() {
        let firstCard: Phaser.GameObjects.Image | null = null;
        let secondCard: Phaser.GameObjects.Image | null = null;
        let matches = 0; // Max 3

        const cards = [this.unflipped, this.unflipped_1, this.unflipped_2, this.unflipped_3, this.unflipped_4, this.unflipped_5];
        const cardTextures = ['flipped', 'testflippedpairspanish', 'testflipped', 'testflippedpair', 'testflipped2', 'testflippedpair2'];

        // Assign textures to cards
        cards.forEach((card, index) => {
            card.setData('flippedTexture', cardTextures[index]);
        });

        const flipCard = (card: Phaser.GameObjects.Image) => {
            if (firstCard && secondCard) {
                return;
            }

            card.setTexture(card.getData('flippedTexture'));

            if (!firstCard) {
                firstCard = card;
            } else if (!secondCard) {
                secondCard = card;

                // Check for match
                if (this.isMatch(firstCard, secondCard)) {
                    const pairKey = `${firstCard.texture.key}-${secondCard.texture.key}`;
                    const reversePairKey = `${secondCard.texture.key}-${firstCard.texture.key}`;

                    // Check if the pair is already matched
                    if (!this.matchedPairs.has(pairKey) && !this.matchedPairs.has(reversePairKey)) {
                        // Cards match and are not already matched
                        this.matchedPairs.add(pairKey);
                        this.matchedPairs.add(reversePairKey);
                        firstCard.disableInteractive();
                        secondCard.disableInteractive();
                        firstCard = null;
                        secondCard = null;
                        matches++;
                        //this.updateProgressBar(matches);
                    } else {
                        // Cards match but are already matched
                        firstCard = null;
                        secondCard = null;
                    }
                } else {
                    // Cards don't match, reset after a short delay
                    this.time.delayedCall(1000, () => {
                        firstCard?.setTexture("unflipped");
                        secondCard?.setTexture("unflipped");
                        firstCard?.setInteractive(); // Re-enable hover effect
                        secondCard?.setInteractive(); // Re-enable hover effect
                        firstCard = null;
                        secondCard = null;
                    });
                }
            }
        };

        cards.forEach(card => {
            card.setInteractive();
            card.on("pointerdown", () => flipCard(card));
        });
    }

    isMatch(card1: Phaser.GameObjects.Image, card2: Phaser.GameObjects.Image): boolean {
        const pairs: { [key: string]: string } = {
            'flipped': 'testflippedpairspanish',
            'testflipped': 'testflippedpair',
            'testflipped2': 'testflippedpair2'
        };

        return pairs[card1.texture.key] === card2.texture.key || pairs[card2.texture.key] === card1.texture.key;
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here