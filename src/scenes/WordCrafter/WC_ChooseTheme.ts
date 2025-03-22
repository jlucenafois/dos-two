import Base from '../Base';

export default class WC_ChooseTheme extends Base {
	constructor() {
		super('WC_ChooseTheme');
	}

	editorCreate(): void {
		// title_ob_2
		this.add
			.image(845.0456043923781, 439.2735078542467, 'title_ob_2')
			.setOrigin(0.5, 0);

		// utensils
		this.utensils = this.createImage(842, 747, 'Utensils', 0.2);
		// carrot
		this.carrot = this.createImage(477, 743, 'Carrot', 0.2);
		// mirror
		this.mirror = this.createImage(1235, 746, 'Mirror', 0.2);

		this.events.emit('scene-awake');
	}

	private utensils!: Phaser.GameObjects.Image;
	private carrot!: Phaser.GameObjects.Image;
	private mirror!: Phaser.GameObjects.Image;

	create() {
		super.create();
		this.editorCreate();
	}

	private createImage(
		x: number,
		y: number,
		texture: string,
		scale: number
	): Phaser.GameObjects.Image {
		const image = this.add.image(x, y, texture);
		image.setScale(scale);
		image.setInteractive({
			useHandCursor: true,
			pixelPerfect: true,
		});
		image.on('pointerdown', () => {
			this.scene.stop('WC_ChooseTheme');
            this.scene.start('WC_Main', { theme: texture });
		});
		return image;
	}
}
