
// You can write more code here

/* START OF COMPILED CODE */

import OB_Base from "./OB_Base";
/* START-USER-IMPORTS */

/* END-USER-IMPORTS */

export default class OB_4 extends OB_Base {

	constructor() {
		super("OB_4");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	// Add this near the top with your other private properties
private titleText!: Phaser.GameObjects.Text;

preload(): void {
	super.create();
	this.create();
	
	this.load.pack("story-asset-pack", "assets/story/story-asset-pack.json");

	this.load.on("progress", (value: number) => {
		this.updateProgressBar(value);
	});

	this.load.on("complete", () => {
		this.events.emit("showExitButton");
		this.events.emit("showSideArrows");
		this.events.emit("changeBackground", "#C7CCFF");

		// Show title
		this.titleText = this.add.text(864, 300, "Chapter 4", {
			fontFamily: "Arial",
			fontSize: "64px",
			color: "#000000",
		}).setOrigin(0.5).setAlpha(0);

		this.tweens.add({
			targets: this.titleText,
			alpha: 1,
			duration: 500,
			yoyo: true,
			hold: 2000,
			onComplete: () => {
				this.scene.start("P_0");
			}
		});
	});
}


	// Function to update progress bar based on value
	updateProgressBar(value: number) {
		if (value === 1) {
			this.progress_bar.setTexture("100_progress_bar_lg");
		} else if (value >= 0.75) {
			this.progress_bar.setTexture("75_progress_bar_lg");
		} else if (value >= 0.5) {
			this.progress_bar.setTexture("50_progress_bar_lg");
		} else if (value >= 0.25) {
			this.progress_bar.setTexture("25_progress_bar_lg");
		} else {
			this.progress_bar.setTexture("0_progress_bar_lg");
		}
	}

	editorCreate(): void {
		
	}

	private progress_bar!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here

	create() {
		// progress_bar
		const progress_bar = this.add.image(864, 558.5, "0_progress_bar_lg");

		this.progress_bar = progress_bar;
		super.create()
		this.events.emit("scene-awake");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
