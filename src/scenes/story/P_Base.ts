
// You can write more code here

/* START OF COMPILED CODE */

import Base from "../Base";
/* START-USER-IMPORTS */
import { CURRENT_SETTINGS, Language } from "../settings";
import { SCRIPT } from "../script";
/* END-USER-IMPORTS */

export default class P_Base extends Base {

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
		this.renderText();

	}
		/**
	 * Renders text dynamically using script by scene key
	 */
		renderText() {
			const isSpanish = CURRENT_SETTINGS.gameState.language === Language.Spanish;

			const sceneScript = SCRIPT[this.scene.key]
			const preferredText = isSpanish ? sceneScript.spanishText : sceneScript.englishText;
			const alternateText = isSpanish ? sceneScript.englishText : sceneScript.spanishText;

			// Display the preferred language string at the preferred coordinates
			this.add.text(
				sceneScript.preferredX, 
				sceneScript.preferredY, 
				preferredText,  
				{ fontSize: '24px', color: 'red' }
			);

			// Display the alternate language string at the alternate coordinates
			this.add.text(
				sceneScript.alternateX, 
				sceneScript.alternateY, 
				alternateText, 
				{ fontSize: '24px', color: 'blue' }
			);
		}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
