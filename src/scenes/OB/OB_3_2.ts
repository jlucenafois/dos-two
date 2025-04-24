
// You can write more code here

/* START OF COMPILED CODE */

import OB_Base from "./OB_Base";
/* START-USER-IMPORTS */
import { enableHoverAudio, playBackgroundAudio } from "../../utils";


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
		const match_button = this.add.image(1363, 616, "match_button");

		// word_button
		const word_button = this.add.image(829, 616, "word_button");

		// memory_button
		const memory_button = this.add.image(317, 616, "memory_button");

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

		this.match_button = match_button;
		this.word_button = word_button;
		this.memory_button = memory_button;

		this.events.emit("scene-awake");
	}

	private match_button!: Phaser.GameObjects.Image;
	private word_button!: Phaser.GameObjects.Image;
	private memory_button!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here

	create() {
	this.editorCreate();
	super.create();

	// Ensure images scale from center and have a gray tint by default
	const buttons = [this.match_button, this.word_button, this.memory_button];

	buttons.forEach(button => {
		button.setOrigin(0.5, 0.5);

		button.setInteractive({ pixelPerfect: true, useHandCursor: true });

		button.on("pointerover", () => {
			button.setScale(1.1); // only scale on hover
		});

		button.on("pointerout", () => {
			button.setScale(1);
		});
	});

	// Audio
	playBackgroundAudio(this, '3.2-line-1');
	enableHoverAudio(this, { object: this.memory_button, audioKey: '3.2-line-2' });
	enableHoverAudio(this, { object: this.word_button, audioKey: '3.2-line-3' });
	enableHoverAudio(this, { object: this.match_button, audioKey: '3.2-line-4' });
}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
