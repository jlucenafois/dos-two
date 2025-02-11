// You can write more code here

/* START OF COMPILED CODE */

import index_text from "../prefabs/index_text";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class P_0 extends Phaser.Scene {

	constructor() {
		super("P_0");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// cover_text
		const cover_text = new index_text(this);
		this.add.existing(cover_text);
		cover_text.text = "P_0";
		cover_text.setStyle({  });

		// cover_0
		const cover_0 = this.add.sprite(864, 558.5, "cover_0");
		cover_0.play("open_cover");

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	create() {
		this.editorCreate()

    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here