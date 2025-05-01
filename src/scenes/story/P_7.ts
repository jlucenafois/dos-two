
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

		// _11X12_Background
		const _11X12_Background = this.add.image(0, 0, "11X12 Background");
		_11X12_Background.scaleX = 0.6691453859371791;
		_11X12_Background.scaleY = 0.6691453859371791;
		_11X12_Background.setOrigin(0, 0);
		container_1.add(_11X12_Background);

		this.container_1 = container_1;

		this.events.emit("scene-awake");
	}

	private container_1!: Phaser.GameObjects.Container;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate()
		super.applyCropMask(this.container_1, 400.5, 176, 1000, 800);
		this.mainContainer = this.container_1;
		super.create();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
