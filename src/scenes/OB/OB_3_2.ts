
// You can write more code here

/* START OF COMPILED CODE */

import { CURRENT_SETTINGS } from "../settings";
import OB_Base from "./OB_Base";
/* START-USER-IMPORTS */


/* END-USER-IMPORTS */

export default class OB_3_2 extends OB_Base {

	constructor() {
		super("OB_3_2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// choose_game
		this.add.image(864, 275, "choose_game");

		// match_title
		this.add.image(1404, 859, "match_title");

		// memory_title
		this.add.image(311, 859, "memory_title");

		// word_title
		this.add.image(849, 859, "word_title");

		// match_button
		const match_button = this.add.image(1138, 394, "match_button");
		match_button.setOrigin(0, 0);

		// word_button
		const word_button = this.add.image(604, 394, "word_button");
		word_button.setOrigin(0, 0);

		// memory_button
		const memory_button = this.add.image(92, 439, "memory_button");
		memory_button.setOrigin(0, 0);

		this.memory_button = memory_button;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */
	private memory_button!: Phaser.GameObjects.Image;
	// Write your code here

	create() {

		super.create();
		this.editorCreate();

		/* Memory Game */
		this.memory_button.setInteractive({
			useHandCursor: true,
			pixelPerfect:true
		});

		// Link memory_button - no current hover image
		this.memory_button.on("pointerdown", () => {
			this.events.emit("updateUI", "show_back_arrow");
			this.scene.stop("OB_3_2");
			this.scene.start("DD_0");
		});

		// Check if the UI scene is already running
		if (!this.scene.isActive("OB_UI")) {
			this.scene.launch("OB_UI"); // Launch the UI overlay only if it hasn't been launched already
		}

		CURRENT_SETTINGS.gameState.prevScene = "OB_2";
			// Update to go to the navigating scene
			this.events.on("back_arrow_clicked", () => {
				this.scene.stop("OB_3_2");
				this.scene.start("OB_2");
			});

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
