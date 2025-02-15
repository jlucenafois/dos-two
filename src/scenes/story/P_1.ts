
// You can write more code here

/* START OF COMPILED CODE */

import Base from "../Base";
/* START-USER-IMPORTS */
import {CURRENT_SETTINGS, Language} from "../settings"

/* END-USER-IMPORTS */

export default class P_1 extends Base {

	constructor() {
		super("P_1");

		/* START-USER-CTR-CODE */
		this.coordinates = {
			"preferred" : {
				"x": 150,
				"y": 150
			},
			"alternate" : {
				"x": 300,
				"y": 300
			}
		}
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

		const isSpanish = CURRENT_SETTINGS.gameState.language === Language.Spanish;

		const preferredText = isSpanish ? "spanish" : "english";
		const alternateText = isSpanish ? "english" : "spanish";

		// Display the preferred language string at the preferred coordinates
		this.add.text(
			this.coordinates.preferred.x, 
			this.coordinates.preferred.y, 
			preferredText, 
			{ fontSize: '24px', color: '#ffffff' }
		);

		// Display the alternate language string at the alternate coordinates
		this.add.text(
			this.coordinates.alternate.x, 
			this.coordinates.alternate.y, 
			alternateText, 
			{ fontSize: '24px', color: '#aaaaaa' }
		);
		

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
