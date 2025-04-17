
// You can write more code here

/* START OF COMPILED CODE */

import OB_Base from "./OB_Base";
/* START-USER-IMPORTS */
import {CURRENT_SETTINGS, Language} from "../../settings";

/* END-USER-IMPORTS */

export default class OB_3_1 extends OB_Base {

	constructor() {
		super("OB_3_1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// english_bubble
		const english_bubble = this.add.image(1094, 583, "english_bubble");

		// spanish_bubble
		const spanish_bubble = this.add.image(604, 585, "spanish_bubble");

		// blinking_left
		const blinking_left = this.add.sprite(138, 814, "2.2 Blink_450x630", 0);
		blinking_left.flipX = true;
		blinking_left.play("blinking_left");

		// blinking_right
		const blinking_right = this.add.sprite(1558, 816, "2.2 Blink_450x630", 0);
		blinking_right.play("blinking_right");

		this.english_bubble = english_bubble;
		this.spanish_bubble = spanish_bubble;

		this.events.emit("scene-awake");
	}

	private english_bubble!: Phaser.GameObjects.Image;
	private spanish_bubble!: Phaser.GameObjects.Image;

	/* START-USER-CODE */
	private title!: Phaser.GameObjects.Text;
	private spanish_title!: Phaser.GameObjects.Text;
	private english_title!: Phaser.GameObjects.Text;

	// Write your code here

	create() {
		this.editorCreate();
		super.create();

		// TITLES

		// options
		this.title = this.add.text(0, 0, "Which language is easier for you?", {
			fontSize: '40px',
			fontFamily: 'Bowlby One'
		})
		this.title.setOrigin(0.5);
		this.title.setPosition(this.cameras.main.centerX, 275);

		// SPANISH
		this.spanish_title = this.add.text(0, 0, "Español", {
			fontSize: '40px',
			fontFamily: 'Bowlby One'
		})
		this.spanish_title.setOrigin(0.5);
		// Position it centered on top of the reading_mode graphic
		this.spanish_title.setPosition(
			this.spanish_bubble.x + 10,
			this.spanish_bubble.y
		);
		// ENGLISH
		this.english_title = this.add.text(0, 0, "English", {
			fontSize: '40px',
			fontFamily: 'Bowlby One'
		})
		this.english_title.setOrigin(0.5);
		// Position it centered on top of the reading_mode graphic
		this.english_title.setPosition(
			this.english_bubble.x,
			this.english_bubble.y
		);

		/* SPANISH BUBBLE */
		this.spanish_bubble.setInteractive({
			useHandCursor: true, 
			pixelPerfect: true
		});

		this.spanish_bubble.on("pointerover", () => {
			this.spanish_bubble.setTexture("spanish_bubble_hovered");
			this.spanish_title.setFontSize("45px");
		});

		this.spanish_bubble.on("pointerout", () => {
			this.spanish_bubble.setTexture("spanish_bubble");
			this.spanish_title.setFontSize("40px");
		});


		// Click event - Transition to OB_3_1
		this.spanish_bubble.on("pointerdown", () => {
			CURRENT_SETTINGS.gameState.language = Language.Spanish
			this.scene.start("OB_4");
		});

		/* ENGLISH BUBBLE */
		this.english_bubble.setInteractive({
			useHandCursor: true, 
			pixelPerfect: true
		});

		this.english_bubble.on("pointerover", () => {
			this.english_bubble.setTexture("english_bubble_hovered");
			this.english_title.setFontSize("45px");

		});

		this.english_bubble.on("pointerout", () => {
			this.english_bubble.setTexture("english_bubble");
			this.english_title.setFontSize("40px");

		});

		// Click event - Transition to OB_3_1
		this.english_bubble.on("pointerdown", () => {
			CURRENT_SETTINGS.gameState.language = Language.English
			this.scene.start("OB_4");
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
