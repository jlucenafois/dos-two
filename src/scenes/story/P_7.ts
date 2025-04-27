// You can write more code here

/* START OF COMPILED CODE */

import P_Base from "./P_Base";
/* START-USER-IMPORTS */


/* END-USER-IMPORTS */

export default class P_7 extends P_Base {

	constructor() {
		super("P_7");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// container_1
		const container_1 = this.add.container(398, 174);
		container_1.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// p_7_8_bg
		const p_7_8_bg = this.add.image(0, 0, "7X8 Background");
		p_7_8_bg.scaleX = 0.6691453859371791;
		p_7_8_bg.scaleY = 0.6691453859371791;
		p_7_8_bg.setOrigin(0, 0);
		container_1.add(p_7_8_bg);

		// anim_4
		const anim_4 = this.add.sprite(1843, 134, "8.4 Lamp 150x250", 0);
		anim_4.setOrigin(0, 0);
		container_1.add(anim_4);

		// anim_1
		const anim_1 = this.add.sprite(1427, 48, "8.1 Reading_512x512", 0);
		anim_1.setOrigin(0, 0);
		container_1.add(anim_1);

		// anim_2
		const anim_2 = this.add.sprite(1334, 319, "8.2 Parrot_180x200", 0);
		anim_2.setOrigin(0, 0);
		container_1.add(anim_2);

		// anim_3
		const anim_3 = this.add.sprite(929, 2, "8.3 Stars 700x200", 0);
		anim_3.setOrigin(0, 0);
		container_1.add(anim_3);

		// anim
		const anim = this.add.sprite(324, 206, "7 Clarita_450x540", 0);
		anim.setOrigin(0, 0);
		anim.play("7_anim");
		container_1.add(anim);

		this.p_7_8_bg = p_7_8_bg;
		this.anim_4 = anim_4;
		this.anim_1 = anim_1;
		this.anim_2 = anim_2;
		this.anim_3 = anim_3;
		this.anim = anim;
		this.container_1 = container_1;

		this.events.emit("scene-awake");
	}

	private p_7_8_bg!: Phaser.GameObjects.Image;
	private anim_4!: Phaser.GameObjects.Sprite;
	private anim_1!: Phaser.GameObjects.Sprite;
	private anim_2!: Phaser.GameObjects.Sprite;
	private anim_3!: Phaser.GameObjects.Sprite;
	private anim!: Phaser.GameObjects.Sprite;
	private container_1!: Phaser.GameObjects.Container;

	/* START-USER-CODE */

	private panAndTransition(container: Phaser.GameObjects.Container, deltaX: number) {
		const duration = 2000; // 2 seconds for the pan
	
		this.tweens.add({
			targets: container,
			x: container.x + deltaX,
			ease: 'Sine.easeInOut',
			duration: duration,
			onComplete: () => {
			}
		});
	}
	


	create() {
		this.editorCreate();
		super.applyCropMask(this.container_1, 400.5, 176, 1000, 800);
		super.create();		
		// Delay a bit if you want, or start immediately
		this.time.delayedCall(3000, () => {
			this.panAndTransition(this.container_1, -1000);
		});
	}	

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
