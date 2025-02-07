
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OB_UI extends Phaser.Scene {

	constructor() {
		super("OB_UI");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// default_exit_lg
		const default_exit_lg = this.add.image(1568, 69, "default_exit_lg");
		default_exit_lg.setOrigin(0, 0);

		// default_home_lg
		const default_home_lg = this.add.image(80, 69, "default_home_lg");
		default_home_lg.setOrigin(0, 0);

		// default_unmuted_lg
		const default_unmuted_lg = this.add.image(192, 69, "default_unmuted_lg");
		default_unmuted_lg.setOrigin(0, 0);

		this.default_exit_lg = default_exit_lg;
		this.default_home_lg = default_home_lg;
		this.default_unmuted_lg = default_unmuted_lg;

		this.events.emit("scene-awake");
	}

	private default_exit_lg!: Phaser.GameObjects.Image;
	private default_home_lg!: Phaser.GameObjects.Image;
	private default_unmuted_lg!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();


		/* HOME */
		this.default_home_lg.setInteractive({ useHandCursor: true });

		// Mouse press effect
		this.default_home_lg.on("pointerdown", () => {
			this.default_home_lg.setTexture("pressed_home_lg"); // Change to pressed state
		});
		// Release effect (if still hovered)
		this.default_home_lg.on("pointerup", () => {
			this.default_home_lg.setTexture("default_home_lg"); // Reset to hover state
			this.scene.stop("OB_2")
			this.scene.start("OB_1"); // Switch to OB1 scene
		});


		/* SOUND */
		this.default_unmuted_lg.setInteractive({ useHandCursor: true });

		let isMuted = localStorage.getItem("muteState") === "true"; // Load saved state
		this.sound.mute = isMuted; // Apply stored setting
		this.default_unmuted_lg.setTexture(isMuted ? "default_muted_lg" : "default_unmuted_lg");

		this.default_unmuted_lg.on("pointerdown", () => {
			this.default_unmuted_lg.setTexture(isMuted ? "pressed_muted_lg" : "pressed_unmuted_lg"); 
		});

		this.default_unmuted_lg.on("pointerup", () => {
			isMuted = !isMuted;
			localStorage.setItem("muteState", isMuted.toString()); // Save setting
			this.default_unmuted_lg.setTexture(isMuted ? "default_muted_lg" : "default_unmuted_lg");
			this.sound.mute = isMuted;
		});

		/* EXIT */ 
		this.default_exit_lg.setInteractive({ useHandCursor: true });

		// Mouse press effect
		this.default_exit_lg.on("pointerdown", () => {
			this.default_exit_lg.setTexture("pressed_exit_lg"); // Change to pressed state
		});
		// Release effect (if still hovered)
		this.default_exit_lg.on("pointerup", () => {
			this.default_exit_lg.setTexture("default_exit_lg"); // Reset to hover state
			this.scene.stop("OB_2")
			this.scene.start("OB_1"); // Switch to OB1 scene
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
