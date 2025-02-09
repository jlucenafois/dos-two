
// You can write more code here

/* START OF COMPILED CODE */

import index_text from "../prefabs/index_text";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OB_3_1 extends Phaser.Scene {

	constructor() {
		super("OB_3_1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// text
		const text = new index_text(this);
		this.add.existing(text);
		text.text = "OB_3_1";
		text.setStyle({  });

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
