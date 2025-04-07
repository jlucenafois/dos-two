
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { CURRENT_SETTINGS } from "../settings";
import MG_Base from "./MG_Base";
/* END-USER-IMPORTS */

export default class MG_2 extends MG_Base {

	private unflipped: Phaser.GameObjects.Image;

	constructor() {
		super("MG_2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// hover_unflipped
		this.unflipped = this.add.image(457, 638, "unflipped");

		// hover_unflipped_1
		this.add.image(730, 366, "unflipped");

		// hover_unflipped_2
		this.add.image(730, 902, "unflipped");

		// hover_unflipped_3
		this.add.image(1270, 635, "unflipped");

		// hover_unflipped_4
		this.add.image(998, 366, "unflipped");

		// hover_unflipped_5
		this.add.image(998, 902, "unflipped");

		// hover_unflipped_6
		this.add.image(730, 634, "unflipped");

		// hover_unflipped_7
		this.add.image(998, 634, "unflipped");

		// mgsubtitle_sm
		this.add.image(295, 364, "mgsubtitle_sm");

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.events.emit("updateUI", "show_exit_button");
			CURRENT_SETTINGS.gameState.prevScene = "DD_0"; // Set a different prevScene for MG_1
			this.events.on("exit_button_clicked", () => {
				this.scene.stop("MG_2");
				this.scene.start("DD_0"); // Navigate to DD_0
			});
		this.addTitle();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
