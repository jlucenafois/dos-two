
// You can write more code here

/* START OF COMPILED CODE */

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
		const reading_mode = this.add.image(325, 287, "reading_mode");
		reading_mode.setOrigin(0, 0);

		// game_mode
		const game_mode = this.add.image(928, 348, "game_mode");
		game_mode.setOrigin(0, 0);

		this.reading_mode = reading_mode;
		this.game_mode = game_mode;

		this.events.emit("scene-awake");
	}

	private reading_mode!: Phaser.GameObjects.Image;
	private game_mode!: Phaser.GameObjects.Image;
	private title!: Phaser.GameObjects.Text;
	private reading_title!: Phaser.GameObjects.Text;
	private game_title!: Phaser.GameObjects.Text;


	/* START-USER-CODE */


	create() {

		this.editorCreate();
		super.create()

		this.events.emit("hideProgressBar");
		// TITLES

		// options
		this.title = this.add.text(0, 0, "Choose a reading mode", {
			fontSize: '40px',
			fontFamily: 'Bowlby One'
		})
		this.title.setOrigin(0.5);
		this.title.setPosition(this.cameras.main.centerX, 275);

		// reading 
		this.reading_title = this.add.text(0, 0, "Story\nTime", {
			fontSize: '40px',
			fontFamily: 'Bowlby One',
			align: 'center'
		});
		this.reading_title.setOrigin(0.5);
		
		// Position it centered on top of the reading_mode graphic
		this.reading_title.setPosition(
			this.reading_mode.x + this.reading_mode.displayWidth / 2,
			this.reading_mode.y + this.reading_mode.displayHeight + 80 // 40px padding below image
		);
		

		// games
		this.game_title = this.add.text(0, 0, "Language\nGames", {
			fontSize: '40px',
			fontFamily: 'Bowlby One',
			align: 'center'
		});
		this.game_title.setOrigin(0.5);
		
		// Position it centered on top of the reading_mode graphic
		this.game_title.setPosition(
			this.game_mode.x + this.game_mode.displayWidth / 2,
			this.reading_mode.y + this.reading_mode.displayHeight + 80 // 40px padding below image
		);

		
		this.events.emit("showExitButton"); // Notify UI
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
			this.scene.stop("OB_2");
			this.scene.start("OB_3_2");
		});

		// Check if the UI scene is already running
		if (!this.scene.isActive("OB_UI")) {
			this.scene.launch("OB_UI"); // Launch the UI overlay only if it hasn't been launched already
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
