/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { updateGameState } from "./settings";
/* END-USER-IMPORTS */

export default class Base extends Phaser.Scene {

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

	create() {
		this.editorCreate();

		// Add a title using the key of the passed scene
		this.addTitle();

		// Call updateGameState with the passed scene
		updateGameState(this);
	}

	/**
	 * Adds a title to the scene using the key of the passed scene.
	 */
	addTitle() {
		this.add.text(860, 100, `${this.scene.key}`, {
			fontSize: '40px',
			fontFamily: 'Arial'
		}).setOrigin(0.5);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */