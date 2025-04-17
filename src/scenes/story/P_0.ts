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
		open_cover.setInteractive(new Phaser.Geom.Rectangle(374, 179, 1061.4753484153912, 795.73105782395), Phaser.Geom.Rectangle.Contains);

		this.open_cover = open_cover;

		this.events.emit("scene-awake");
	}

	private open_cover!: Phaser.GameObjects.Sprite;

	/* START-USER-CODE */

	create() {
		this.editorCreate()
		super.create()
		this.events.emit("disableBackNav")

		this.open_cover.input!.cursor = "pointer";

		// Play animation on click
		this.open_cover.on("pointerdown", () => {
			this.open_cover.play("open_cover");
		});
		this.open_cover.on(Phaser.Animations.Events.ANIMATION_COMPLETE, (anim:Phaser.Animations.Animation) => {
			if (anim.key === "open_cover") { 
				this.events.emit("showBook");
				this.scene.start("P_1");
			}
		});

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here