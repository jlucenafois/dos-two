// You can write more code here

/* START OF COMPILED CODE */

import { fadeIn } from "../../utils";
import P_Base from "./P_Base";
/* START-USER-IMPORTS */


/* END-USER-IMPORTS */

export default class P_5 extends P_Base {

	constructor() {
		super("P_5");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// container_1
		const container_1 = this.add.container(398, 174);
		container_1.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// p5_bg
		const p5_bg = this.add.image(0, 0, "7X8 Background");
		p5_bg.scaleX = 0.6691453859371791;
		p5_bg.scaleY = 0.6691453859371791;
		p5_bg.setOrigin(0, 0);
		container_1.add(p5_bg);

		// anim_4
		const anim_4 = this.add.sprite(1843, 134, "8.4 Lamp 150x250", 0);
		anim_4.setOrigin(0, 0);
		anim_4.play("8_4_anim");
		container_1.add(anim_4);

		// anim_1
		const anim_1 = this.add.sprite(1427, 48, "8.1 Reading_512x512", 0);
		anim_1.setOrigin(0, 0);
		anim_1.play("8_1_anim");
		container_1.add(anim_1);

		// anim_2
		const anim_2 = this.add.sprite(1334, 319, "8.2 Parrot_180x200", 0);
		anim_2.setOrigin(0, 0);
		anim_2.play("8_2_anim");
		container_1.add(anim_2);

		// anim_3
		const anim_3 = this.add.sprite(929, 2, "8.3 Stars 700x200", 0);
		anim_3.setOrigin(0, 0);
		anim_3.play("8_3_anim");
		container_1.add(anim_3);

		// anim
		const anim = this.add.sprite(324, 206, "7 Clarita_450x540", 0);
		anim.setOrigin(0, 0);
		anim.play("7_anim");
		container_1.add(anim);

		this.container_1 = container_1;

		this.events.emit("scene-awake");
	}

	private container_1!: Phaser.GameObjects.Container;

	/* START-USER-CODE */




	create() {
		this.editorCreate();
		super.applyCropMask(this.container_1, 400.5, 176, 1000, 800);
		this.mainContainer = this.container_1;
		super.create();
		fadeIn(this)
		// Emit ready if you still want signaling
		this.events.emit('scene-ready');
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
