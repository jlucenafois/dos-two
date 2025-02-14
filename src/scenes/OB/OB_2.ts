
// You can write more code here

/* START OF COMPILED CODE */


/* START-USER-IMPORTS */
import Base from "../Base";


/* END-USER-IMPORTS */

export default class OB_2 extends Base{

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

	create() {
		super.create()
		this.editorCreate();

		this.events.emit("updateUI", "show_exit_button"); // Notify UI
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
			this.events.emit("updateUI", "show_back_arrow"); // Notify UI
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
			this.events.emit("updateUI", "show_back_arrow"); // Notify UI
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
