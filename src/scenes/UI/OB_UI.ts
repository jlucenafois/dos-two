
// You can write more code here

/* START OF COMPILED CODE */

import Base from "../Base";
/* START-USER-IMPORTS */
import {CURRENT_SETTINGS} from '../../settings.ts'
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

		// exit
		const exit = this.add.image(1568, 69, "default_exit_lg");
		exit.setOrigin(0, 0);
		exit.visible = false;

		// home
		const home = this.add.image(80, 69, "default_home_lg");
		home.setOrigin(0, 0);
		home.visible = false;

		// sound_control
		const sound_control = this.add.image(192, 69, "default_unmuted_lg");
		sound_control.setOrigin(0, 0);
		sound_control.visible = false;

		// home_purple
		const home_purple = this.add.image(80, 69, "default_home_purple_lg");
		home_purple.setOrigin(0, 0);
		home_purple.visible = false;

		// next_page
		const next_page = this.add.image(1536, 577, "default_next_lg");
		next_page.setOrigin(0, 0);
		next_page.visible = false;

		// prev_page
		const prev_page = this.add.image(192, 637, "disabled_back_lg");
		prev_page.setOrigin(1, 0.5);
		prev_page.visible = false;

		// progress_bar
		const progress_bar = this.add.image(743, 86, "progress_medium_0");
		progress_bar.setOrigin(0, 0);
		progress_bar.visible = false;

		// coin
		const coin = this.add.image(80, 951, "coin");
		coin.setOrigin(0, 0);
		coin.visible = false;

		this.book = book;
		this.exit = exit;
		this.home = home;
		this.sound_control = sound_control;
		this.home_purple = home_purple;
		this.next_page = next_page;
		this.prev_page = prev_page;
		this.progress_bar = progress_bar;
		this.coin = coin;

		this.events.emit("scene-awake");
	}

	private book!: Phaser.GameObjects.Image;
	private exit!: Phaser.GameObjects.Image;
	private home!: Phaser.GameObjects.Image;
	private sound_control!: Phaser.GameObjects.Image;
	private home_purple!: Phaser.GameObjects.Image;
	private next_page!: Phaser.GameObjects.Image;
	private prev_page!: Phaser.GameObjects.Image;
	private progress_bar!: Phaser.GameObjects.Image;
	private coin!: Phaser.GameObjects.Image;

	/* START-USER-CODE */
	registerListeners() {
		this.scene.manager.scenes.forEach(scene => {
			if (scene instanceof Base) {
				scene.events.on("showSideArrows", this.showSideArrows, this);		
				scene.events.on("hideSideArrows", this.hideSideArrows, this);		
				scene.events.on("showBook", this.showBook, this);		
				scene.events.on("hideBook", this.hideBook, this);		
				scene.events.on("showOBUI", this.showOBUI, this);		
				scene.events.on("changeBackground", this.changeBackground, this);
				scene.events.on("updateProgressBar", this.updateProgressBar, this)
				scene.events.on("hideProgressBar", this.hideProgressBar, this)
				scene.events.on("showProgressBar", this.showProgressBar, this)
				scene.events.on("disableForwardNav", this.disableForwardNav, this)
				scene.events.on("enableForwardNav", this.enableForwardNav, this)
				scene.events.on("disableBackNav", this.disableBackNav, this)
				scene.events.on("enableBackNav", this.enableBackNav, this)
				scene.events.on("updateCoinsUI", this.updateCoinsUI, this)
			}
		});

	}
	// Write your code here
	stopAllScenes(exceptions: Array<string>) {
		const activeScenes = this.scene.manager.getScenes(true); // Get active scenes
		for (const gameScene of activeScenes) {
			if (!exceptions.includes(gameScene.scene.key)) { // Stop only if NOT in exceptions
				this.scene.stop(gameScene.scene.key); // Stop the active gameplay scene
			}
		}
	}

	/* EVENTS */

	showOBUI() {
		this.home.setVisible(true)
		this.sound_control.setVisible(true)
		this.coin.setVisible(true)
		this.coin_counter.setVisible(true)
		this.exit.setVisible(true)
	}
	showSideArrows() {
		this.prev_page.setVisible(true);
		this.next_page.setVisible(true);
	}
	hideSideArrows() {
		this.prev_page.setVisible(false);
		this.next_page.setVisible(false);
	}
	showBook() {
		this.book.setVisible(true);
	}
	hideBook() {
		this.book.setVisible(false);
	}
	changeBackground(color: string) {
		this.cameras.main.setBackgroundColor(color);
	}

	updateProgressBar(value: number) {
		if (value === 1) {
			this.progress_bar.setTexture("progress_medium_100");
		} else if (value >= 0.75) {
			this.progress_bar.setTexture("progress_medium_75");
		} else if (value >= 0.5) {
			this.progress_bar.setTexture("progress_medium_50");
		} else if (value >= 0.25) {
			this.progress_bar.setTexture("progress_medium_25");
		} else {
			this.progress_bar.setTexture("progress_medium_0");
		}
	}
	hideProgressBar() {
		this.progress_bar.setVisible(false);
	}
	showProgressBar() {
		this.progress_bar.setVisible(true);
	}

	disableForwardNav() {
		this.next_page.disableInteractive();
		this.next_page.setTexture("disabled_next_lg");
	}

	enableForwardNav() {
		this.next_page.setInteractive({ useHandCursor: true });
		this.next_page.setTexture("default_next_lg");
	}

	disableBackNav() {
		this.prev_page.disableInteractive();
		this.prev_page.setTexture("disabled_back_lg");
	}

	enableBackNav() {
		this.prev_page.setInteractive({ useHandCursor: true });
		this.prev_page.setTexture("default_back_lg");
	}

	private coin_counter!: Phaser.GameObjects.Text;
	private title!: Phaser.GameObjects.Text;

	updateCoinsUI() {
		this.coin_counter.setText(`${CURRENT_SETTINGS.gameState.coins}`)
	}

	create() {
		this.editorCreate();
		this.registerListeners();

		this.coin_counter = this.add.text(140, 950, `${CURRENT_SETTINGS.gameState.coins}`, {
			fontSize: '40px',
			fontFamily: 'Bowlby One'
		}).setVisible(false)
		super.create();

		/* HOME */
		this.home.setInteractive({ useHandCursor: true });

		// Mouse press effect
		this.home.on("pointerdown", () => {
			this.home.setTexture("pressed_home_lg"); // Change to pressed state
		});

		// Release effect (if still hovered)
		this.home.on("pointerup", () => {
			this.home.setTexture("default_home_lg"); // Reset to hover state
			this.stopAllScenes([])
			this.sound.stopAll()
			this.scene.start("OB_1"); // Switch to OB1 scene
		});

		// Mouse out effect (Reset to normal)
		this.home.on("pointerout", () => {
			this.home.setTexture("default_home_lg");
		});


	/* SOUND */
		this.sound_control.setInteractive({ useHandCursor: true });

		let isMuted = localStorage.getItem("muteState") === "true"; // Load saved state
		this.sound.mute = isMuted; // Apply stored setting
		this.sound_control.setTexture(isMuted ? "default_muted_lg" : "default_unmuted_lg");

		this.sound_control.on("pointerdown", () => {
			this.sound_control.setTexture(isMuted ? "pressed_muted_lg" : "pressed_unmuted_lg"); 
		});

		this.sound_control.on("pointerup", () => {
			isMuted = !isMuted;
			localStorage.setItem("muteState", isMuted.toString()); // Save setting
			this.sound_control.setTexture(isMuted ? "default_muted_lg" : "default_unmuted_lg");
			this.sound.mute = isMuted;
		});

		// Mouse out effect (Reset to normal)
		this.sound_control.on("pointerout", () => {
			this.sound_control.setTexture(isMuted ? "default_muted_lg" : "default_unmuted_lg");
		});

	/* EXIT */ 
		this.exit.setInteractive({ useHandCursor: true });

		// Mouse press effect
		this.exit.on("pointerdown", () => {
			this.exit.setTexture("pressed_exit_lg"); // Change to pressed state
		});

		// Release effect (if still hovered)
		this.exit.on("pointerup", () => {
			this.exit.setTexture("default_exit_lg"); // Reset to hover state
			this.stopAllScenes([])
			this.sound.stopAll()
			this.scene.start("OB_1"); // Switch to OB1 scene
		});

		// Mouse out effect (Reset to normal)
		this.exit.on("pointerout", () => {
			this.exit.setTexture("default_exit_lg");
		});

	/* BACK LG*/ 
		this.prev_page.setInteractive({ useHandCursor: true });

		// Mouse press effect
		this.prev_page.on("pointerdown", () => {
			this.prev_page.setTexture("pressed_back_lg"); // Change to pressed state
		});

		// Release effect (if still hovered)
		this.prev_page.on("pointerup", () => {
			this.prev_page.setTexture("default_back_lg"); // Reset to hover state
			if (CURRENT_SETTINGS.gameState.currScene == "P_1") {
				this.hideBook()
				CURRENT_SETTINGS.gameState.hasOpenedCover = false
			} 
			if (CURRENT_SETTINGS.gameState.prevScene) {
				this.stopAllScenes(["OB_UI"])
				this.sound.stopAll()
				this.scene.launch(CURRENT_SETTINGS.gameState.prevScene)
			}
		});

		// Mouse out effect (Reset to normal)
		this.prev_page.on("pointerout", () => {
			this.prev_page.setTexture("default_back_lg");
		});

	/* NEXT LG*/ 
		this.next_page.setInteractive({ useHandCursor: true });

		// Mouse press effect
		this.next_page.on("pointerdown", () => {
			this.next_page.setTexture("pressed_next_lg"); // Change to pressed state
		});

		// Release effect (if still hovered)
		this.next_page.on("pointerup", () => {
			this.next_page.setTexture("default_next_lg"); // Reset to hover state

			// If the current scene is P_0, trigger "playAnim"
			if (CURRENT_SETTINGS.gameState.currScene === "P_0") {
				this.events.emit("openCover");
				CURRENT_SETTINGS.gameState.hasOpenedCover = true
			} else if (CURRENT_SETTINGS.gameState.nextScene) {
				this.stopAllScenes(["OB_UI"])
				this.sound.stopAll()
				this.scene.launch(CURRENT_SETTINGS.gameState.nextScene)
			}
		});

		// Mouse out effect (Reset to normal)
		this.next_page.on("pointerout", () => {
			this.next_page.setTexture("default_next_lg");
		});
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
