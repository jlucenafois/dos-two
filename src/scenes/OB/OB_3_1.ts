
// You can write more code here

/* START OF COMPILED CODE */

import OB_Base from "./OB_Base";
/* START-USER-IMPORTS */
import {CURRENT_SETTINGS, Language} from "../settings";

/* END-USER-IMPORTS */

export default class OB_3_1 extends OB_Base {

	constructor() {
		super("OB_3_1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// girl_right
		const girl_right = this.add.image(1378, 515, "girl_right");
		girl_right.setOrigin(0, 0);

		// girl_left
		const girl_left = this.add.image(330, 515, "girl_left");
		girl_left.setOrigin(1, 0);

		// english_bubble
		const english_bubble = this.add.image(822, 417, "english_bubble");
		english_bubble.setOrigin(0, 0);

		// spanish_bubble
		const spanish_bubble = this.add.image(330, 386, "spanish_bubble");
		spanish_bubble.setOrigin(0, 0);

		// eye_blink_left
		const eye_blink_left = this.add.image(203, 660, "eye_blink_left");
		eye_blink_left.setOrigin(0.5, 0);

		// eye_blink_right
		const eye_blink_right = this.add.image(1475, 660, "eye_blink_right");
		eye_blink_right.setOrigin(0, 0);

		// language_selection_title
		this.add.image(864, 309, "language_selection_title");

		this.english_bubble = english_bubble;
		this.spanish_bubble = spanish_bubble;

		this.events.emit("scene-awake");
	}

	private english_bubble!: Phaser.GameObjects.Image;
	private spanish_bubble!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here

	create() {

		super.create();
		this.editorCreate();
		/* SPANISH BUBBLE */
		this.spanish_bubble.setInteractive({
			useHandCursor: true, 
			pixelPerfect: true
		});

		// Mouse hover effect (scale up)
		this.spanish_bubble.on("pointerover", () => {
			this.tweens.add({
				targets: this.spanish_bubble,
				scale: 1.1, // Increase size by 10%
				duration: 200, // Duration in milliseconds
				ease: "Linear"
			});
		});

		// Mouse out effect (scale back to normal)
		this.spanish_bubble.on("pointerout", () => {
			this.tweens.add({
				targets: this.spanish_bubble,
				scale: 1, // Return to original size
				duration: 200,
				ease: "Linear"
			});
		});

		// Click event - Transition to OB_3_1
		this.spanish_bubble.on("pointerdown", () => {
			this.events.emit("updateUI", "spanish_bubble"); // Notify UI
			CURRENT_SETTINGS.gameState.language = Language.Spanish
			this.scene.start("OB_4");
		});

		/* ENGLISH BUBBLE */
		this.english_bubble.setInteractive({
			useHandCursor: true, 
			pixelPerfect: true
		});

		// Mouse hover effect (scale up)
		this.english_bubble.on("pointerover", () => {
			this.tweens.add({
				targets: this.english_bubble,
				scale: 1.1, // Increase size by 10%
				duration: 200, // Duration in milliseconds
				ease: "Linear"
			});
		});

		// Mouse out effect (scale back to normal)
		this.english_bubble.on("pointerout", () => {
			this.tweens.add({
				targets: this.english_bubble,
				scale: 1, // Return to original size
				duration: 200,
				ease: "Linear"
			});
		});

		// Click event - Transition to OB_3_1
		this.english_bubble.on("pointerdown", () => {
			this.events.emit("updateUI", "english_bubble"); // Notify UI
			CURRENT_SETTINGS.gameState.language = Language.English
			this.scene.start("OB_4");
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
