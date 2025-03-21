
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import Base from "../Base";
/* END-USER-IMPORTS */

export default class WC_ChooseTheme extends Base {

	constructor() {
		super("WC_ChooseTheme");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// title_ob_2
		const title_ob_2 = this.add.image(845.0456043923781, 439.2735078542467, "title_ob_2");
		title_ob_2.setOrigin(0.5, 0);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
