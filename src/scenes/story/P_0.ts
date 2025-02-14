// You can write more code here

/* START OF COMPILED CODE */


/* START-USER-IMPORTS */
import Base from "../Base";
/* END-USER-IMPORTS */

export default class P_0 extends Base {

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
	// 	this.sprite_1.on(Phaser.Animations.Events.ANIMATION_COMPLETE, (anim:Phaser.Animations.Animation) => {
	// 		if (anim.key === "open_cover") { 
	// 			this.events.emit("updateUI", "show_side_arrows"); // Notify UI only after animation finishes
    //     }
    // });
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here