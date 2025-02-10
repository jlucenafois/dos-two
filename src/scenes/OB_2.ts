
// You can write more code here

/* START OF COMPILED CODE */

import index_text from "./index_text";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OB_2 extends Phaser.Scene {

	constructor() {
		super("OB_2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// text
		const text = new index_text(this);
		this.add.existing(text);
		text.text = "OB_2";
		text.setStyle({  });

		// reading_mode
		const reading_mode = this.add.image(325, 287, "reading_mode");
		reading_mode.setOrigin(0, 0);

		// game_mode
		const game_mode = this.add.image(928, 348, "game_mode");
		game_mode.setOrigin(0, 0);

		// reading_mode_title
		const reading_mode_title = this.add.image(464, 805, "reading_mode_title");
		reading_mode_title.setOrigin(0, 0);

		// game_mode_title
		const game_mode_title = this.add.image(1012, 805, "game_mode_title");
		game_mode_title.setOrigin(0, 0);

		// title_ob_2
		const title_ob_2 = this.add.image(864, 275, "title_ob_2");
		title_ob_2.setOrigin(0.5, 0);

		this.reading_mode = reading_mode;
		this.game_mode = game_mode;

		this.events.emit("scene-awake");
	}

	private reading_mode!: Phaser.GameObjects.Image;
	private game_mode!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.reading_mode.setInteractive({
			useHandCursor: true, 
			pixelPerfect: true
		});
		
		this.game_mode.setInteractive({
			useHandCursor: true, 
			pixelPerfect: true
		});

		this.reading_mode.on("pointerdown", () => {
		this.scene.start("OB_5"); // Switch to OB2 scene
		});

		this.scene.launch("OB_UI")



	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
