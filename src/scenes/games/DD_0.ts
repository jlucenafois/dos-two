
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { CURRENT_SETTINGS } from "../../settings";
import MG_Base from "./MG_Base";
/* END-USER-IMPORTS */

export default class DD_0 extends MG_Base {

	private eightcards: Phaser.GameObjects.Image;
	private sixcards: Phaser.GameObjects.Image;
	private twelvecards: Phaser.GameObjects.Image;

	constructor() {
		super("DD_0");
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// eightcards
		this.eightcards = this.add.image(859, 619, "eightcards");

		// sixcards
		this.sixcards = this.add.image(322, 619, "sixcards");

		// twelvecards
		this.twelvecards = this.add.image(1408, 619, "twelvecards");

		// hover_eight
		const hover_eight = this.add.image(859, 619, "eightcards_hover");
		hover_eight.setVisible(false);
		
		// hover_six
		const hover_six = this.add.image(322, 619, "sixcards_hover");
		hover_six.setVisible(false);
		
		// hover_twelve
		const hover_twelve = this.add.image(1408, 619, "twelvecards_hover");
		hover_twelve.setVisible(false);

		// chooseNumberMG
		const chooseNumberMG = this.add.image(855, 305, "chooseNumberMG");
		chooseNumberMG.scaleX = 1.5;
		chooseNumberMG.scaleY = 1.5;

		const addHoverClick = (
			card: Phaser.GameObjects.Image, 
			hoverImage: Phaser.GameObjects.Image, 
			onClick: () => void
		) => {
			card.setInteractive({
				useHandCursor: true,
				pixelPerfect: true
			});
			// Show hover cards on pointer over
			card.on("pointerover", () => {
				hoverImage.setVisible(true);
			});
			// Hide hover image on pointer out
			card.on("pointerout", () => {
				hoverImage.setVisible(false);
			});
			card.on("pointerdown", () => {
				onClick();
			});
		};

		// add hover effect
		addHoverClick(this.eightcards, hover_eight, () => {
			this.events.emit("updateUI", "show_exit_button"); // Notify UI
			this.scene.stop("DD_0");
			this.scene.start("MG_2");
		});
		addHoverClick(this.sixcards, hover_six, () => {
			this.events.emit("updateUI", "show_exit_button"); // Notify UI
			this.scene.stop("DD_0");
			this.scene.start("MG_1");
		});
		addHoverClick(this.twelvecards, hover_twelve, () => {
			this.events.emit("updateUI", "show_exit_button"); // Notify UI
			this.scene.stop("DD_0");
			this.scene.start("MG_3");
		});

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */
	// Write your code here
	
	create() {
		super.create();
		this.editorCreate();
		//updateGameState(this)
		this.events.emit("updateUI","show_exit_button");
		// Set the previous scene to OB_3_2
		CURRENT_SETTINGS.gameState.prevScene = "OB_3_2";
		// Update to go to the navigating scene
		this.events.on("show_exit_button_clicked", () => {
			this.scene.stop("DD_0");
			this.scene.start("OB_3_2");
		});
		this.addTitle();
	}


	// me code
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
