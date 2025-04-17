
// You can write more code here

/* START OF COMPILED CODE */

import OB_Base from "./OB_Base";
/* START-USER-IMPORTS */


/* END-USER-IMPORTS */

export default class OB_3_2 extends OB_Base {

	constructor() {
		super("OB_3_2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// match_button
		this.add.image(1363, 616, "match_button");

		// word_button
		this.add.image(829, 616, "word_button");

		// memory_button
		this.add.image(317, 616, "memory_button");

		// title
		const title = this.add.bitmapText(838, 309, "BowlbyOne", "Choose a game\n");
		title.setOrigin(0.5, 0.5);
		title.text = "Choose a game\n";
		title.fontSize = 40;

		// reading_title
		const reading_title = this.add.bitmapText(309, 840, "BowlbyOne", "Memory Cards");
		reading_title.setOrigin(0.5, 0.5);
		reading_title.text = "Memory Cards";
		reading_title.fontSize = 40;
		reading_title.align = 1;

		// memory_title
		const memory_title = this.add.bitmapText(838, 840, "BowlbyOne", "Word Crafter");
		memory_title.setOrigin(0.5, 0.5);
		memory_title.text = "Word Crafter";
		memory_title.fontSize = 40;
		memory_title.align = 1;

		// memory_title_1
		const memory_title_1 = this.add.bitmapText(1306, 840, "BowlbyOne", "Match and Learn");
		memory_title_1.setOrigin(0.5, 0.5);
		memory_title_1.text = "Match and Learn";
		memory_title_1.fontSize = 40;
		memory_title_1.align = 1;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
		super.create();

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
