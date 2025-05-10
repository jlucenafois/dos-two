
// You can write more code here

/* START OF COMPILED CODE */

import { fadeIn } from "../../utils";
import P_Base from "./P_Base";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class P_1 extends P_Base {

	constructor() {
		super("P_1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// mirror
		const mirror = this.add.sprite(698, 630, "1_girl", 0);
		mirror.visible = false;

		// sparkles
		const sparkles = this.add.sprite(822, 353, "1_sparkles", 18);
		sparkles.visible = false;

		this.mirror = mirror;
		this.sparkles = sparkles;

		this.events.emit("scene-awake");
	}

	private mirror!: Phaser.GameObjects.Sprite;
	private sparkles!: Phaser.GameObjects.Sprite;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
		super.create()
		this.events.emit("enableBackNav")
		fadeIn(this)
		// Emit ready if you still want signaling
		this.events.emit('scene-ready');

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
