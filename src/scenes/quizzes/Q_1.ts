
// You can write more code here

/* START OF COMPILED CODE */

import Q_Base from "./Q_Base";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Q_1 extends Q_Base {

	constructor() {
		super("Q_1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {
		super.create();
		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
