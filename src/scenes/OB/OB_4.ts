
// You can write more code here

/* START OF COMPILED CODE */

import index_text from "../prefabs/index_text";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OB_4 extends Phaser.Scene {

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

		// text
		const text = new index_text(this);
		this.add.existing(text);
		text.text = "OB_4";
		text.setStyle({  });

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		
		this.scene.start("P_0")
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
