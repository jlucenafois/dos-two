import Base from "../Base";

export default class WC_ChooseTheme extends Base {
	constructor() {
		super("WC_ChooseTheme");
	}

	editorCreate(): void {
		super.create();

		// choose a theme title
		const title = this.add.bitmapText(
			this.cameras.main.centerX,
			300,
			"BowlbyOne",
			"Choose a theme"
		);
		title.setOrigin(0.5, 0); // Center horizontally, keep top alignment
		title.setTint(0x484848);

		const gap = 50;
		const imageKeys = ["Utensils", "Carrot", "Mirror"];
		const subtitles: Record<string, string> = {
			Utensils: "Kitchen Supplies",
			Carrot: "Food",
			Mirror: "Bedroom",
		};

		// Create all images temporarily to calculate width
		const tempImages = imageKeys.map(key => this.add.image(0, 0, key));
		const totalWidth = tempImages.reduce((acc, img) => acc + img.width, 0) + gap * (tempImages.length - 1);
		tempImages.forEach(img => img.destroy()); // Clean up temp images

		let startX = this.cameras.main.centerX - totalWidth / 2;

		imageKeys.forEach((key) => {
			// We'll calculate center of this image to place it correctly
			const temp = this.add.image(0, 0, key);
			const imageWidth = temp.width;
			temp.destroy();

			const centerX = startX + imageWidth / 2;
			this.createImage(centerX, 600, key, subtitles[key]);

			startX += imageWidth + gap;
		});

		this.events.emit("scene-awake");
	}

	create() {
		this.editorCreate();
		this.events.emit("changeBackground", "#ffd439"); // Notify UI
	}

	private createImage(
		centerX: number,
		centerY: number,
		texture: string,
		subtitle: string
	): Phaser.GameObjects.Image {
		// Create image centered at given position
		const image = this.add.image(centerX, centerY, texture);
		image.setInteractive({
			useHandCursor: true,
			pixelPerfect: true,
		});
		image.on("pointerdown", () => {
			this.scene.stop("WC_ChooseTheme");
			this.scene.start("WC_Game", { theme: texture });
		});

		// Add subtitle underneath
		const subtitleText = this.add.text(
			centerX,
			centerY + image.height / 2 + 20,
			subtitle,
            {
                font: "bold 32px Arial",
                color: "#000"
            }
		);
		subtitleText.setOrigin(0.5, 0);
		subtitleText.setTint(0x484848);

		return image;
	}
}
