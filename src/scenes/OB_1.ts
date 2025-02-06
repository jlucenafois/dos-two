
// You can write more code here

/* START OF COMPILED CODE */

import index_text from "./index_text";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OB_1 extends Phaser.Scene {

	constructor() {
		super("OB_1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// default_play
		const default_play = this.add.image(640, 360, "default_play");

		// text
		const text = new index_text(this);
		this.add.existing(text);
		text.text = "OB_1";
		text.setStyle({  });

		this.default_play = default_play;

		this.events.emit("scene-awake");
	}

	private default_play!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.default_play.setInteractive({ useHandCursor: true });

		// Mouse hover effect
		this.default_play.on("pointerover", () => {
			this.default_play.setTexture("hovered_play"); // Change to hover state
		});

		// Mouse out effect (Reset to normal)
		this.default_play.on("pointerout", () => {
			this.default_play.setTexture("default_play");
		});

		// Mouse press effect
		this.default_play.on("pointerdown", () => {
			this.default_play.setTexture("pressed_play"); // Change to pressed state
		});

		// Release effect (if still hovered)
		this.default_play.on("pointerup", () => {
			this.default_play.setTexture("hovered_play"); // Reset to hover state
			this.scene.start("OB_2"); // Switch to OB2 scene
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
