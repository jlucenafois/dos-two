
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import index_text from "./index_text";
/* END-USER-IMPORTS */

export default class OB_5_turned extends Phaser.Scene {

	constructor() {
		super("OB_5_turned");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// oB_5_5
		this.add.image(863, 548, "OB 5.5");

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
		// Ensure page_1_obj starts small
				// page_1_obj
		const page_1_obj = this.add.image(704, 580, "Page 1 obj");
		// page_1_obj.scaleX = 0.8957557329660852;
		// page_1_obj.scaleY = 0.9791249320991222;

		page_1_obj.setScale(0); // Start invisible

		// Add a small delay to ensure OB 5.5 is loaded
		this.time.delayedCall(300, () => {
			this.tweens.add({
				targets: page_1_obj,
				scaleX: 0.8957557329660852, // Target scale X
				scaleY: 0.9791249320991222, // Target scale Y
				ease: "Back.Out", // Makes it pop
				duration: 500, // 0.5s animation
			});
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
