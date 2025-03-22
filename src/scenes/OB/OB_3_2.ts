import OB_Base from "./OB_Base";

export default class OB_3_2 extends OB_Base {

	constructor() {
		super("OB_3_2");
	}

	editorCreate(): void {
		this.add.image(864, 275, "choose_game");
		this.add.image(1404, 859, "match_title");
		this.add.image(311, 859, "memory_title");
		this.add.image(849, 859, "word_title");

        // change this for other games
		this.match_button = this.createButton(1138, 394, "match_button", "WC_Preload");
		this.word_button = this.createButton(604, 394, "word_button", "WC_Preload");
		this.memory_button = this.createButton(92, 439, "memory_button", "WC_Preload");

		this.events.emit("scene-awake");
	}

	private match_button!: Phaser.GameObjects.Image;
	private word_button!: Phaser.GameObjects.Image;
	private memory_button!: Phaser.GameObjects.Image;

	create() {
		super.create();
		this.editorCreate();
		this.events.emit("updateUI", "show_exit_button"); // Notify UI
	}

	private createButton(x: number, y: number, texture: string, sceneKey: string): Phaser.GameObjects.Image {
		const button = this.add.image(x, y, texture).setOrigin(0, 0);
		button.setInteractive({
			useHandCursor: true,
			pixelPerfect: true
		});
		button.on("pointerdown", () => {
			this.scene.stop("OB_3_2");
			this.scene.start(sceneKey);
		});
		return button;
	}
}
