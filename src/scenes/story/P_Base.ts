
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
     * Renders text dynamically using script by scene key, enclosed in a rectangle with blue stroke and drop shadow
     */
    renderText() {
        const isSpanish = CURRENT_SETTINGS.gameState.language === Language.Spanish;

        const sceneScript = SCRIPT[this.scene.key];
        const preferredText = isSpanish ? sceneScript.spanishText : sceneScript.englishText;
        const alternateText = isSpanish ? sceneScript.englishText : sceneScript.spanishText;

        // Function to render rich text with a rectangle and shadow
        const renderRichText = (x: number, y: number, textSegments: TextSegment[]) => {
            let offsetX = x; // X position for each text part
            let offsetY = y; // Y position for multi-line handling
            // Render all text segments 
            textSegments.forEach(segment => {
                const parts = segment.text.split("\n");

                parts.forEach((part, index) => {
                    if (index > 0) {
                        offsetX = x; // Reset X for new line
                        offsetY += 40; // Move Y down for new line (adjust as needed)
                    }

                    const textStyle = {
                        font: `${segment.style?.fontWeight || '600'} ${segment.style?.fontSize || '30px'} ${segment.style?.fontFamily || 'Calibri'}`,
                        color: segment.style?.fill || "#ffffff",
                    };

                    const textObject = this.add.text(offsetX, offsetY, part, textStyle);
                    offsetX += textObject.width; // Move X for next part on same line
                });
            });
        };

        // Display the preferred language string
        renderRichText(sceneScript.preferredX, sceneScript.preferredY, preferredText);

        // Display the alternate language string
        renderRichText(sceneScript.alternateX, sceneScript.alternateY, alternateText);
    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
