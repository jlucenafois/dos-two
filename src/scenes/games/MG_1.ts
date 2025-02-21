// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
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

    constructor() {
        super("MG_1");

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
        const addHoverEffect = (card: Phaser.GameObjects.Image) => {
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
        addHoverEffect(this.unflipped);
        addHoverEffect(this.unflipped_1);
        addHoverEffect(this.unflipped_2);
        addHoverEffect(this.unflipped_3);
        addHoverEffect(this.unflipped_4);
        addHoverEffect(this.unflipped_5);

        this.events.emit("scene-awake");
    }

    create() {
        this.editorCreate();
        this.events.emit("updateUI", "show_back_arrow");

        // Memory game setup
        this.setupMemoryGame();
    }

    setupMemoryGame() {
        let firstCard: Phaser.GameObjects.Image | null = null;
        let secondCard: Phaser.GameObjects.Image | null = null;
        let matches = 0;

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
                    // Cards match
                    firstCard = null;
                    secondCard = null;
                    matches++;
                    this.updateProgressBar(matches);
                } else {
                    // Cards don't match, reset after a short delay
                    this.time.delayedCall(1000, () => {
                        firstCard?.setTexture("unflipped");
                        secondCard?.setTexture("unflipped");
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

    	updateProgressBar(matches: number) {
		// Update the progress bar based on the number of matches
		// TODO: Fix clicking on same match and moving progress bar
		switch (matches) {
			case 1:
				this.progressBar.setTexture('25_progress_bar_lg');
				break;
			case 2:
				this.progressBar.setTexture('50_progress_bar_lg');
				break;
			case 3:
				this.progressBar.setTexture('75_progress_bar_lg');
				break;
			case 4:
				this.progressBar.setTexture('100_progress_bar_lg');
				break;
		}
	}

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here