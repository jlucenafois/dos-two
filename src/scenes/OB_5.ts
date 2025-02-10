// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OB_5 extends Phaser.Scene {

	constructor() {
		super("OB_5");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// oB_5_Book
		this.add.image(926, 579, "OB_5 Book");
		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here
    preload() {
        this.load.image("page_1", "assets/OB 5.png");
        this.load.image("page_2", "assets/OB 5.0.png");
        this.load.image("page_3", "assets/OB 5.1.png");
        this.load.image("page_4", "assets/OB 5.2.png");
        this.load.image("page_5", "assets/OB 5.3.png");
        this.load.image("page_6", "assets/OB 5.4.png");
        this.load.image("page_7", "assets/OB 5.5.png");
    }

	create() {
        // Create a sprite and set it to the first frame
        // Get the game width and height
        const { width, height } = this.sys.game.config;

        // Create the sprite and set it to the first frame
        this.pageSprite = this.add.sprite(width / 2, height / 2, "page_1");
        this.pageSprite.setDisplaySize(width, height);

        var div = document.getElementById('game-container');
        div!.style.backgroundColor = "#C7CCFF";

        this.anims.create({
            key: "flip",
            frames: [
                { key: "page_1" },
                { key: "page_2" },
                { key: "page_3" },
                { key: "page_4" },
                { key: "page_5" },
                { key: "page_6" },
                { key: "page_7" }
            ],
            frameRate: 6,
            repeat: 0 
        });

        // Trigger the animation when clicked
        this.input.on("pointerdown", () => {
            this.pageSprite.play("flip");
        });
    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
