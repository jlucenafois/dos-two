
// You can write more code here

/* START OF COMPILED CODE */


/* START-USER-IMPORTS */
import Base from "../Base";


/* END-USER-IMPORTS */

export default class P_4 extends Base{

	constructor() {
		super("P_4");

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
		super.create()
		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
