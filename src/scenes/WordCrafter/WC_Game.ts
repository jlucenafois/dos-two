// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class WC_Game extends Phaser.Scene {
	private theme: string;
	constructor() {
		super('WC_Game');

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	init({ theme }: { theme: string }): void {
		this.theme = theme;
	}

	editorCreate(): void {
		this.events.emit('scene-awake');
	}

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
        this.events.emit('updateUI', 'show_exit_button')
		this.events.emit("updateUI", "change_background", "#ffffff"); // Notify UI
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
