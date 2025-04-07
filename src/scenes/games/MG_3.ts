
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { CURRENT_SETTINGS } from "../settings";
import MG_Base from "./MG_Base"
/* END-USER-IMPORTS */

export default class MG_3 extends MG_Base {

	constructor() {
		super("MG_3");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// hover_unflipped
		this.add.image(482, 634, "unflipped");

		// hover_unflipped_1
		this.add.image(750, 366, "unflipped");

		// hover_unflipped_2
		this.add.image(750, 902, "unflipped");

		// hover_unflipped_3
		this.add.image(1286, 634, "unflipped");

		// hover_unflipped_4
		this.add.image(1018, 366, "unflipped");

		// hover_unflipped_5
		this.add.image(1018, 902, "unflipped");

		// hover_unflipped_6
		this.add.image(750, 634, "unflipped");

		// hover_unflipped_7
		this.add.image(1018, 634, "unflipped");

		// hover_unflipped_8
		this.add.image(482, 366, "unflipped");

		// hover_unflipped_9
		this.add.image(482, 902, "unflipped");

		// hover_unflipped_10
		this.add.image(1286, 366, "unflipped");

		// hover_unflipped_11
		this.add.image(1286, 902, "unflipped");

		// mgsubtitle_sm
		const mgsubtitle_sm = this.add.image(186, 344, "mgsubtitle_sm");
		mgsubtitle_sm.scaleX = 0.9;
		mgsubtitle_sm.scaleY = 0.9;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.events.emit("updateUI", "show_exit_button");
			CURRENT_SETTINGS.gameState.prevScene = "DD_0"; // Set a different prevScene for MG_1
			this.events.on("exit_button_clicked", () => {
				this.scene.stop("MG_3");
				this.scene.start("DD_0"); // Navigate to DD_0
			});
		this.addTitle();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
