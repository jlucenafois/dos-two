// You can write more code here

/* START OF COMPILED CODE */

import index_text from "../prefabs/index_text";
/* START-USER-IMPORTS */
import {updateGameState} from "../settings"
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

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	create() {
		this.editorCreate()
		updateGameState(this)
		// Listen for animation completion
	// 	this.sprite_1.on(Phaser.Animations.Events.ANIMATION_COMPLETE, (anim:Phaser.Animations.Animation) => {
	// 		if (anim.key === "open_cover") { 
	// 			this.events.emit("updateUI", "show_side_arrows"); // Notify UI only after animation finishes
    //     }
    // });
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here