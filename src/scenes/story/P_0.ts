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

		this.open_cover = open_cover;

		this.events.emit("scene-awake");
	}

	private open_cover!: Phaser.GameObjects.Sprite;

	/* START-USER-CODE */

	create() {
		super.create()
		this.editorCreate()
		// Set depth to always be on back
		this.scene.sendToBack(this);

		// Listen for animation completion
		this.open_cover.on(Phaser.Animations.Events.ANIMATION_COMPLETE, (anim:Phaser.Animations.Animation) => {
			if (anim.key === "open_cover") { 
				this.events.emit("updateUI", "show_book"); // Notify UI
				this.open_cover.setVisible(false);
				this.scene.bringToTop(this)
				// this.mirror.setVisible(true)
				// this.mirror.setScale(0)

				// this.tweens.add({
				// 	targets: this.mirror,
				// 	scaleX: 0.8957557329660852, // Target scale X
				// 	scaleY: 0.9791249320991222, // Target scale Y
				// 	ease: "Back.Out", // Makes it pop
				// 	duration: 500, // 0.5s animation
				// });
				// this.mirror.play("mirror");
				// this.mirror.setInteractive({ useHandCursor: true})
				// this.mirror.on("pointerover", () => {
				// 	this.mirror.play("mirror");
				// })
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here