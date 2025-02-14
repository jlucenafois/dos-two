
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import Base from "../Base";
import {CURRENT_SETTINGS} from '../settings.ts'
/* END-USER-IMPORTS */

export default class OB_UI extends Base {

	constructor() {
		super("OB_UI");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// book
		const book = this.add.image(864, 558.5, "cover_5");
		book.visible = false;

		// default_exit_lg
		const default_exit_lg = this.add.image(1568, 69, "default_exit_lg");
		default_exit_lg.setOrigin(0, 0);

		// default_home_lg
		const default_home_lg = this.add.image(80, 69, "default_home_lg");
		default_home_lg.setOrigin(0, 0);

		// default_unmuted_lg
		const default_unmuted_lg = this.add.image(192, 69, "default_unmuted_lg");
		default_unmuted_lg.setOrigin(0, 0);

		// default_back_md
		const default_back_md = this.add.image(1608, 112, "default_back_md");
		default_back_md.visible = false;

		// default_home_purple_lg
		const default_home_purple_lg = this.add.image(80, 69, "default_home_purple_lg");
		default_home_purple_lg.setOrigin(0, 0);
		default_home_purple_lg.visible = false;

		// default_next_lg
		const default_next_lg = this.add.image(1536, 577, "default_next_lg");
		default_next_lg.setOrigin(0, 0);
		default_next_lg.visible = false;

		// default_back_lg
		const default_back_lg = this.add.image(192, 637, "default_back_lg");
		default_back_lg.setOrigin(1, 0.5);
		default_back_lg.visible = false;

		this.book = book;
		this.default_exit_lg = default_exit_lg;
		this.default_home_lg = default_home_lg;
		this.default_unmuted_lg = default_unmuted_lg;
		this.default_back_md = default_back_md;
		this.default_home_purple_lg = default_home_purple_lg;
		this.default_next_lg = default_next_lg;
		this.default_back_lg = default_back_lg;

		this.events.emit("scene-awake");
	}

	private book!: Phaser.GameObjects.Image;
	private default_exit_lg!: Phaser.GameObjects.Image;
	private default_home_lg!: Phaser.GameObjects.Image;
	private default_unmuted_lg!: Phaser.GameObjects.Image;
	private default_back_md!: Phaser.GameObjects.Image;
	private default_home_purple_lg!: Phaser.GameObjects.Image;
	private default_next_lg!: Phaser.GameObjects.Image;
	private default_back_lg!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here
	stopAllScenes(exceptions: Array<string>) {
		const activeScenes = this.scene.manager.getScenes(true); // Get active scenes
		for (const gameScene of activeScenes) {
			if (!exceptions.includes(gameScene.scene.key)) { // Stop only if NOT in exceptions
				this.scene.stop(gameScene.scene.key); // Stop the active gameplay scene
			}
		}
	}

	updateUI(event: string) {
		if (event === "show_back_arrow") {
			// // Fade out the old button
			// this.tweens.add({
			// 	targets: this.default_exit_lg,
			// 	alpha: 0,  // Fade out
			// 	duration: 300, // Duration in milliseconds
			// 	onComplete: () => {
			this.default_exit_lg.setVisible(false);
			// 	}
			// });

			// // Make sure the new button is visible before fading in
			// this.default_back_md.setAlpha(0);
			this.default_back_md.setVisible(true);

			// // Fade in the new button
			// this.tweens.add({
			// 	targets: this.default_back_md,
			// 	alpha: 1,  // Fade in
			// 	duration: 300
			// });
		} // If event is "show_exit_button", transition from back to exit
		else if (event === "show_exit_button") {
			// // Fade out the old button (back button)
			// this.tweens.add({
			// 	targets: this.default_back_md,
			// 	alpha: 0,  // Fade out
			// 	duration: 300, // Duration in milliseconds
			// 	onComplete: () => {
			this.default_back_md.setVisible(false); // Hide the back button
			// 	}
			// });

			// // Make sure the new button (exit button) is visible before fading in
			// this.default_exit_lg.setAlpha(0);
			this.default_exit_lg.setVisible(true);

			// // Fade in the new button (exit button)
			// this.tweens.add({
			// 	targets: this.default_exit_lg,
			// 	alpha: 1,  // Fade in
			// 	duration: 300
			// });
		} else if (event === "show_side_arrows") {
			// // Make sure the new button is visible before fading in
			// this.default_back_lg.setAlpha(0);
			this.default_back_lg.setVisible(true);

			// // Fade in the new button
			// this.tweens.add({
			// 	targets: this.default_back_lg,
			// 	alpha: 1,  // Fade in
			// 	duration: 300
			// });

			// // Make sure the new button is visible before fading in
			// this.default_next_lg.setAlpha(0);
			this.default_next_lg.setVisible(true);

			// // Fade in the new button
			// this.tweens.add({
			// 	targets: this.default_next_lg,
			// 	alpha: 1,  // Fade in
			// 	duration: 300
			// });

		} else if (event === "hide_side_arrows") {
			// // Fade out the old button
			// this.tweens.add({
			// 	targets: this.default_back_lg,
			// 	alpha: 0,  // Fade out
			// 	duration: 300, // Duration in milliseconds
			// 	onComplete: () => {
			this.default_back_lg.setVisible(false);
			// 	}
			// });
			// // Fade out the old button
			// this.tweens.add({
			// 	targets: this.default_next_lg,
			// 	alpha: 0,  // Fade out
			// 	duration: 300, // Duration in milliseconds
			// 	onComplete: () => {
			this.default_next_lg.setVisible(false);
			// 	}
			// });
		} else if (event === "show_book") {
			this.book.setVisible(true);
		}
}
	create() {
		this.editorCreate();
		this.scene.get("OB_2").events.on("updateUI", this.updateUI, this); // read updateUI
		this.scene.get("OB_4").events.on("updateUI", this.updateUI, this); // read updateUI
		this.scene.get("P_1").events.on("updateUI", this.updateUI, this); // read updateUI

	/* HOME */
		this.default_home_lg.setInteractive({ useHandCursor: true });

		// Mouse press effect
		this.default_home_lg.on("pointerdown", () => {
			this.default_home_lg.setTexture("pressed_home_lg"); // Change to pressed state
		});

		// Release effect (if still hovered)
		this.default_home_lg.on("pointerup", () => {
			this.default_home_lg.setTexture("default_home_lg"); // Reset to hover state
			this.stopAllScenes([])
			this.scene.start("OB_1"); // Switch to OB1 scene
		});

		// Mouse out effect (Reset to normal)
		this.default_home_lg.on("pointerout", () => {
			this.default_home_lg.setTexture("default_home_lg");
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

		// Mouse out effect (Reset to normal)
		this.default_unmuted_lg.on("pointerout", () => {
			this.default_unmuted_lg.setTexture(isMuted ? "default_muted_lg" : "default_unmuted_lg");
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
			this.stopAllScenes([])
			this.scene.start("OB_1"); // Switch to OB1 scene
		});

		// Mouse out effect (Reset to normal)
		this.default_exit_lg.on("pointerout", () => {
			this.default_exit_lg.setTexture("default_exit_lg");
		});

	/* BACK */ 
		this.default_back_md.setInteractive({ useHandCursor: true });

		// Mouse press effect
		this.default_back_md.on("pointerdown", () => {
			this.default_back_md.setTexture("pressed_back_md"); // Change to pressed state
		});

		// Release effect (if still hovered)
		this.default_back_md.on("pointerup", () => {
			this.default_back_md.setTexture("default_back_md"); // Reset to hover state
			this.stopAllScenes(["OB_UI"])
			this.scene.launch(CURRENT_SETTINGS.gameState.prevScene!)
		});


		// Mouse out effect (Reset to normal)
		this.default_back_md.on("pointerout", () => {
			this.default_back_md.setTexture("default_back_md");
		});

	/* BACK LG*/ 
		this.default_back_lg.setInteractive({ useHandCursor: true });

		// Mouse press effect
		this.default_back_lg.on("pointerdown", () => {
			this.default_back_lg.setTexture("pressed_back_lg"); // Change to pressed state
		});

		// Release effect (if still hovered)
		this.default_back_lg.on("pointerup", () => {
			this.default_back_lg.setTexture("default_back_lg"); // Reset to hover state
			if (CURRENT_SETTINGS.gameState.prevScene) {
				this.stopAllScenes(["OB_UI"])
				this.scene.launch(CURRENT_SETTINGS.gameState.prevScene)
			}
		});

		// Mouse out effect (Reset to normal)
		this.default_back_lg.on("pointerout", () => {
			this.default_back_lg.setTexture("default_back_lg");
		});

	/* NEXT LG*/ 
		this.default_next_lg.setInteractive({ useHandCursor: true });

		// Mouse press effect
		this.default_next_lg.on("pointerdown", () => {
			this.default_next_lg.setTexture("pressed_next_lg"); // Change to pressed state
		});

		// Release effect (if still hovered)
		this.default_next_lg.on("pointerup", () => {
			this.default_next_lg.setTexture("default_next_lg"); // Reset to hover state
			if (CURRENT_SETTINGS.gameState.nextScene) {
				this.stopAllScenes(["OB_UI"])
				this.scene.launch(CURRENT_SETTINGS.gameState.nextScene)
			}
		});

		// Mouse out effect (Reset to normal)
		this.default_next_lg.on("pointerout", () => {
			this.default_next_lg.setTexture("default_next_lg");
		});
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
