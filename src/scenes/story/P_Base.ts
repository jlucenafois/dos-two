
// You can write more code here

/* START OF COMPILED CODE */

import Base from "../Base";
/* START-USER-IMPORTS */
import { CURRENT_SETTINGS, Language } from "../settings";
import { SCRIPT } from "../script";
import { TextSegment } from "../script";
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
	
		const sceneScript = SCRIPT[this.scene.key];
		const preferredText = isSpanish ? sceneScript.spanishText : sceneScript.englishText;
		const alternateText = isSpanish ? sceneScript.englishText : sceneScript.spanishText;
	
		// Function to render rich text
		const renderRichText = (x: number, y: number, textSegments: TextSegment[]) => {
			let offsetX = x; // X position for each text part
			let offsetY = y; // Y position for multi-line handling
		
			textSegments.forEach(segment => {
				const parts = segment.text.split("\n");
		
				parts.forEach((part, index) => {
					// If it's a new line, reset X and move Y down
					if (index > 0) {
						offsetX = x;
						offsetY += 40; // Adjust line height as needed
					}
					console.log(segment.style)
					const textObject = this.add.text(offsetX, offsetY, part, {
						font: `${segment.style?.fontWeight} ${segment.style?.fontSize} ${segment.style?.fontFamily}` || "600 30px Arial",
						color: segment.style?.fill || "#ffffff",
					});
		
					offsetX += textObject.width; // Continue on the same line
				});
			});
		};
		
		
		
		// Display the preferred language string at the preferred coordinates
		renderRichText(sceneScript.preferredX, sceneScript.preferredY, preferredText);
	
		// Display the alternate language string at the alternate coordinates
		renderRichText(sceneScript.alternateX, sceneScript.alternateY, alternateText);
	}
		

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
