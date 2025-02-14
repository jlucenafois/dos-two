
// You can write more code here

/* START OF COMPILED CODE */


/* START-USER-IMPORTS */
import Base from "../Base";


/* END-USER-IMPORTS */

export default class OB_3_2 extends Base{

	constructor() {
		super("OB_3_2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// choose_game
		this.add.image(864, 275, "choose_game");

		// match_title
		this.add.image(1404, 859, "match_title");

		// memory_title
		this.add.image(311, 859, "memory_title");

		// word_title
		this.add.image(849, 859, "word_title");

		// match_button
		const match_button = this.add.image(1138, 394, "match_button");
		match_button.setOrigin(0, 0);

		// word_button
		const word_button = this.add.image(604, 394, "word_button");
		word_button.setOrigin(0, 0);

		// memory_button
		const memory_button = this.add.image(92, 439, "memory_button");
		memory_button.setOrigin(0, 0);

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
