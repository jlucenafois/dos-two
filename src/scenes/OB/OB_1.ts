
// You can write more code here

/* START OF COMPILED CODE */

import OB_Base from "./OB_Base";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OB_1 extends OB_Base {

	constructor() {
		super("OB_1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// default_play_lg
		const default_play_lg = this.add.image(755, 499, "default_play_lg");
		default_play_lg.setInteractive(this.input.makePixelPerfect());
		default_play_lg.setOrigin(0, 0);

		this.default_play_lg = default_play_lg;

		this.events.emit("scene-awake");
	}

	private default_play_lg!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here

	create() {
		super.create()
		this.editorCreate();
		this.events.emit("updateUI", "change_background", "#7580FF"); // Notify UI
		this.default_play_lg.setInteractive({ useHandCursor: true });

		// Mouse hover effect
		this.default_play_lg.on("pointerover", () => {
			this.default_play_lg.setTexture("hovered_play_lg"); // Change to hover state
		});

		// Mouse out effect (Reset to normal)
		this.default_play_lg.on("pointerout", () => {
			this.default_play_lg.setTexture("default_play_lg");
		});

		// Mouse press effect
		this.default_play_lg.on("pointerdown", () => {
			this.default_play_lg.setTexture("pressed_play_lg"); // Change to pressed state
		});

		// Release effect (if still hovered)
		this.default_play_lg.on("pointerup", () => {
			this.default_play_lg.setTexture("hovered_play_lg"); // Reset to hover state
			this.scene.start("OB_2"); // Switch to OB2 scene
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
