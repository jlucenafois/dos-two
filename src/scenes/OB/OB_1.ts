
// You can write more code here

/* START OF COMPILED CODE */

import { enableHoverAudio } from "../../utils";
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

		// play
		const play = this.add.image(755, 499, "default_play_lg");
		play.setOrigin(0, 0);

		// logo
		const logo = this.add.image(688, 163, "logo");
		logo.setOrigin(0, 0);

		this.play = play;

		this.events.emit("scene-awake");
	}

	private play!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here



	create() {
		// Check if the UI scene is already running
		if (!this.scene.isActive("OB_UI")) {
			this.scene.launch("OB_UI"); // Launch the UI overlay only if it hasn't been launched already
		}
		this.editorCreate();
		enableHoverAudio(this, { object: this.play, audioKey: "1" });
		this.play.setInteractive({useHandCursor: true})

		super.create()
		// this.events.emit("changeBackground", "#7580FF"); // Notify UI
		// Mouse hover effect
		this.play.on("pointerover", () => {
			this.play.setTexture("hovered_play_lg"); // Change to hover state
		});

		// Mouse out effect (Reset to normal)
		this.play.on("pointerout", () => {
			this.play.setTexture("default_play_lg");
		});

		// Mouse press effect
		this.play.on("pointerdown", () => {
			this.play.setTexture("pressed_play_lg"); // Change to pressed state
		});

		// Release effect (if still hovered)
		this.play.on("pointerup", () => {
			this.play.setTexture("hovered_play_lg"); // Reset to hover state
			this.sound.stopAll(); // stops any playing audio
			this.scene.start("OB_2"); // Switch to OB2 scene
		});
		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
