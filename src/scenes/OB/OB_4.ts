
// You can write more code here

/* START OF COMPILED CODE */

import OB_Base from "./OB_Base";
/* START-USER-IMPORTS */

/* END-USER-IMPORTS */

export default class OB_4 extends OB_Base {

	constructor() {
		super("OB_4");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(): void {

		this.load.pack("story-asset-pack", "assets/story/story-asset-pack.json");
	}

	editorCreate(): void {

		// transition_title
		this.add.image(864, 519, "transition_title");

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {
		super.create()
		this.editorCreate();
		this.events.emit("updateUI", "show_exit_button"); // Notify UI
		this.events.emit("updateUI", "show_side_arrows"); // Notify UI
		this.events.emit("updateUI", "change_background", "#C7CCFF"); // Notify UI
		this.scene.start("P_0")
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
