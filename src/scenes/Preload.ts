
// You can write more code here

/* START OF COMPILED CODE */

import Base from "./Base";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Preload extends Base {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// progress_bar
		const progress_bar = this.add.image(864, 558.5, "0_progress_bar_lg");

		this.progress_bar = progress_bar;

		this.events.emit("scene-awake");
	}

	private progress_bar!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.load.pack("OB-asset-pack", "assets/OB/OB-asset-pack.json");
		this.load.pack("UI-asset-pack", "assets/UI/UI-asset-pack.json");

		// Listen for loading progress
		this.load.on("progress", (value: number) => {
			this.updateProgressBar(value);
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

	create() {

		if (process.env.NODE_ENV === "development") {

			const start = new URLSearchParams(location.search).get("start");

			if (start) {

				console.log(`Development: jump to ${start}`);
				this.scene.start(start);

				return;
			}
		}

		this.scene.start("OB_1");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here