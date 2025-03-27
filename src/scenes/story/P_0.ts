// You can write more code here

/* START OF COMPILED CODE */

import P_Base from "./P_Base";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class P_0 extends P_Base {

	constructor() {
		super("P_0");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// open_cover
		const open_cover = this.add.sprite(864, 558.5, "cover_0");
		open_cover.play("open_cover");

		// mirror
		const mirror = this.add.sprite(698, 630, "1_girl", 0);
		mirror.visible = false;

		// sparkles
		const sparkles = this.add.sprite(822, 353, "1_sparkles", 18);
		sparkles.visible = false;

		this.open_cover = open_cover;
		this.mirror = mirror;
		this.sparkles = sparkles;

		this.events.emit("scene-awake");
	}

	private open_cover!: Phaser.GameObjects.Sprite;
	private mirror!: Phaser.GameObjects.Sprite;
	private sparkles!: Phaser.GameObjects.Sprite;

	/* START-USER-CODE */

	create() {
		super.create()
		this.editorCreate()
		// Set depth to always be on back
		this.scene.sendToBack(this);

		// Listen for animation completion
		this.open_cover.on(Phaser.Animations.Events.ANIMATION_COMPLETE, (anim:Phaser.Animations.Animation) => {
			if (anim.key === "open_cover") { 
				this.events.emit("showBook"); // Notify UI
				this.open_cover.setVisible(false);
				this.scene.bringToTop(this)

				/* SPARKLES */
				this.sparkles.setVisible(true)
				this.sparkles.setScale(0)

				this.tweens.add({
					targets: this.sparkles,
					scaleX: 0.8957557329660852, // Target scale X
					scaleY: 0.9791249320991222, // Target scale Y
					ease: "Bounce.Out", // Makes it pop
					duration: 1, // 1s animation
				});
				this.sparkles.play("sparkles");
				this.sparkles.setInteractive({ useHandCursor: true})
				this.sparkles.on("pointerover", () => {
					this.sparkles.play("sparkles");
				})
				/* MIRROR */
				this.mirror.setVisible(true)
				this.mirror.setScale(0)

				this.tweens.add({
					targets: this.mirror,
					scaleX: 0.8957557329660852, // Target scale X
					scaleY: 0.9791249320991222, // Target scale Y
					ease: "Back.Out", // Makes it pop
					duration: 500, // 0.5s animation
				});
				this.mirror.play("mirror");
				this.mirror.setInteractive({ useHandCursor: true})
				this.mirror.on("pointerover", () => {
					this.mirror.play("mirror");
					this.sparkles.play("sparkles");

				})


			}

		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here