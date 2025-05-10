import OB_Base from "./OB_Base";
import { enableHoverAudio, playBackgroundAudio } from "../../utils";

export default class OB_3_2 extends OB_Base {
	constructor() {
		super("OB_3_2");
	}

	editorCreate(): void {
		// title
		const title = this.add.bitmapText(838, 309, "BowlbyOne", "Choose a game\n");
		title.setOrigin(0.5, 0.5);
		title.text = "Choose a game\n";
		title.fontSize = 40;

		// reading_title
		const reading_title = this.add.bitmapText(
			309,
			840,
			"BowlbyOne",
			"Memory Cards"
		);
		reading_title.setOrigin(0.5, 0.5);
		reading_title.text = "Memory Cards";
		reading_title.fontSize = 40;
		reading_title.align = 1;

		// memory_title
		const memory_title = this.add.bitmapText(
			838,
			840,
			"BowlbyOne",
			"Word Crafter"
		);
		memory_title.setOrigin(0.5, 0.5);
		memory_title.text = "Word Crafter";
		memory_title.fontSize = 40;
		memory_title.align = 1;

		// memory_title_1
		const memory_title_1 = this.add.bitmapText(
			1306,
			840,
			"BowlbyOne",
			"Match and Learn"
		);
		memory_title_1.setOrigin(0.5, 0.5);
		memory_title_1.text = "Match and Learn";
		memory_title_1.fontSize = 40;
		memory_title_1.align = 1;

		this.events.emit("scene-awake");
	}

	create() {
		this.editorCreate();
		super.create();
		this.events.emit("changeBackground", "#7580FF");
		playBackgroundAudio(this, "3.2-line-1");

		this.createButton(1363, 616, "match_button", "WC_Preload", "3.2-line-2");
		this.createButton(829, 616, "word_button", "WC_Preload", "3.2-line-3");
		this.createButton(317, 616, "memory_button", "WC_Preload,", "3.2-line-4");
	}

	private createButton(
		x: number,
		y: number,
		texture: string,
		sceneKey: string,
		audioKey: string
	): Phaser.GameObjects.Image {
		const button = this.add.image(x, y, texture).setOrigin(0.5, 0.5);

		button.setInteractive({
			useHandCursor: true,
			pixelPerfect: true,
		});

		button.on("pointerover", () => {
			button.setScale(1.1); // only scale on hover
		});

		button.on("pointerout", () => {
			button.setScale(1);
		});

		button.on("pointerdown", () => {
			this.scene.stop("OB_3_2");
			this.scene.start(sceneKey);
		});

		enableHoverAudio(this, { object: button, audioKey });
		return button;
	}
}
