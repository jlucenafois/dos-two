// You can write more code here

/* START OF COMPILED CODE */

import P_Base from "./P_Base";
/* START-USER-IMPORTS */


/* END-USER-IMPORTS */

export default class P_14 extends P_Base {

	constructor() {
		super("P_14");

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
fadeIn(this)
// Emit ready if you still want signaling
		this.events.emit('scene-ready');
	}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
