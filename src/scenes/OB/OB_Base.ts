
// You can write more code here

/* START OF COMPILED CODE */

import Base from "../Base";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OB_Base extends Base {
	constructor(key:string) {
		super(key);

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
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
