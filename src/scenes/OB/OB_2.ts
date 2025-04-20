
// You can write more code here

/* START OF COMPILED CODE */

import { enableHoverAudio, playBackgroundAudio } from "../../utils";
import OB_Base from "./OB_Base";
/* START-USER-IMPORTS */


/* END-USER-IMPORTS */

export default class OB_2 extends OB_Base {

	constructor() {
		super("OB_2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		// Write your code here
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// reading_mode
		const reading_mode = this.add.image(567, 520, "reading_mode");

		// game_mode
		const game_mode = this.add.image(1158, 577, "game_mode");

		// title
		const title = this.add.bitmapText(864, 309, "BowlbyOne", "Choose a reading mode\n");
		title.setOrigin(0.5, 0.5);
		title.text = "Choose a reading mode\n";
		title.fontSize = 40;

		// reading_title
		const reading_title = this.add.bitmapText(567.5, 840, "BowlbyOne", "Story\nTime");
		reading_title.setOrigin(0.5, 0.5);
		reading_title.text = "Story\nTime";
		reading_title.fontSize = 40;
		reading_title.align = 1;

		// title_2
		const title_2 = this.add.bitmapText(1154, 840, "BowlbyOne", "Language\nGames");
		title_2.setOrigin(0.5, 0.5);
		title_2.text = "Language\nGames";
		title_2.fontSize = 40;
		title_2.align = 1;

		this.reading_mode = reading_mode;
		this.game_mode = game_mode;

		this.events.emit("scene-awake");
	}

	private reading_mode!: Phaser.GameObjects.Image;
	private game_mode!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	create() {

		this.editorCreate();
		super.create()
		playBackgroundAudio(this, "2-choose"); // this will autoplay
		enableHoverAudio(this, { object: this.reading_mode, audioKey: "2-storytime-merged" });
		enableHoverAudio(this, { object: this.game_mode, audioKey: "2-language-games" });
		this.events.emit("showOBUI"); // Notify UI
		/* READING MODE */
		this.reading_mode.setInteractive({
			useHandCursor: true, 
			pixelPerfect: true
		});

		// Mouse hover effect
		this.reading_mode.on("pointerover", () => {
			this.reading_mode.setTexture("hovered_reading_mode"); // Change to hover state
		});

		// Mouse out effect (Reset to normal)
		this.reading_mode.on("pointerout", () => {
			this.reading_mode.setTexture("reading_mode");
		});

		// Click event - Transition to OB_3_1
		this.reading_mode.on("pointerdown", () => {
			this.events.emit("showBackArrow"); // Notify UI
			this.sound.stopAll(); // stops any playing audio
			this.scene.stop("OB_2");
			this.scene.start("OB_3_1");
		});

		/* GAME MODE */
		this.game_mode.setInteractive({
			useHandCursor: true, 
			pixelPerfect: true
		});

		// Mouse hover effect
		this.game_mode.on("pointerover", () => {
			this.game_mode.setTexture("hovered_game_mode"); // Change to hover state
		});

		// Mouse out effect (Reset to normal)
		this.game_mode.on("pointerout", () => {
			this.game_mode.setTexture("game_mode");
		});

		// Click event - Transition to OB_3_2
		this.game_mode.on("pointerdown", () => {
			this.events.emit("showBackArrow"); // Notify UI
			this.sound.stopAll(); // stops any playing audio
			this.scene.stop("OB_2");
			this.scene.start("OB_3_2");
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
