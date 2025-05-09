// You can write more code here

/* START OF COMPILED CODE */

import P_Base from "./P_Base";
/* START-USER-IMPORTS */
import { CURRENT_SETTINGS } from "../../settings";
/* END-USER-IMPORTS */

export default class P_0 extends P_Base {

	constructor() {
		super("P_0");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// book
		const book = this.add.sprite(864, 558.5, "cover_0");
		book.setInteractive(new Phaser.Geom.Rectangle(374, 179, 1061.4753484153912, 795.73105782395), Phaser.Geom.Rectangle.Contains);

		this.book = book;

		this.events.emit("scene-awake");
	}

	private book!: Phaser.GameObjects.Sprite;

	/* START-USER-CODE */

	
	openCover() {
		if (!CURRENT_SETTINGS.gameState.hasOpenedCover) {
			this.book.removeInteractive();
			CURRENT_SETTINGS.gameState.hasOpenedCover = true
			this.book.play("open_cover");
			this.book.on(Phaser.Animations.Events.ANIMATION_COMPLETE, (anim:Phaser.Animations.Animation) => {
				if (anim.key === "open_cover") { 
					this.events.emit("showBook");
					this.scene.start("P_1");
				}
			});
		}
	}

	create() {
		this.editorCreate()
		super.create()
		this.events.emit("disableBackNav")

		this.book.input!.cursor = "pointer";

		const UI_Scene = this.scene.get("OB_UI");
		UI_Scene?.events.on("openCover", this.openCover, this);

		// Play animation on click
		this.book.on("pointerdown", () => {
			this.openCover()
		});


	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here