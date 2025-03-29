
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
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
		this.eightcards = this.add.image(859, 558.5, "eightcards");

		// sixcards
		this.sixcards = this.add.image(322, 558.5, "sixcards");

		// twelvecards
		this.twelvecards = this.add.image(1408, 558.5, "twelvecards");

		// hover_eight
		const hover_eight = this.add.image(859, 558.5, "eightcards_hover");
		hover_eight.setVisible(false);
		
		// hover_six
		const hover_six = this.add.image(322, 558.5, "sixcards_hover");
		hover_six.setVisible(false);
		
		// hover_twelve
		const hover_twelve = this.add.image(1408, 558.5, "twelvecards_hover");
		hover_twelve.setVisible(false);

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
			this.scene.stop("DD_0");
			this.scene.start("MG_1");
		});
		addHoverClick(this.sixcards, hover_six, () => {
			this.scene.stop("DD_0");
			this.scene.start("MG_1");
		});
		addHoverClick(this.twelvecards, hover_twelve, () => {
			this.scene.stop("DD_0");
			this.scene.start("MG_1");
		});

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */
	// Write your code here
	
	create() {
		this.editorCreate();
		this.events.emit("updateUI", "show_back_arrow");
		// Link hover_eight 
	}


	// me code
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
