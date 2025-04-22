// You can write more code here

/* START OF COMPILED CODE */

import P_Base from "./P_Base";
/* START-USER-IMPORTS */


/* END-USER-IMPORTS */

export default class P_29 extends P_Base {

	constructor() {
		super("P_29");

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
		this.editorCreate();
		super.create()
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
