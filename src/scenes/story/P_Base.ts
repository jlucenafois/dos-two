
// You can write more code here

/* START OF COMPILED CODE */

import Base from "../Base";
/* START-USER-IMPORTS */
import { CURRENT_SETTINGS, Language } from "../settings";
import { SCRIPT } from "../script";
import { TextSegment } from "../../../types/TextSegment";
import { WordObject } from "../../../types/WordObject";
/* END-USER-IMPORTS */

export default class P_Base extends Base {

    constructor(key: string) {
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
        this.renderDualText()
    }

    /**
     * Renders text dynamically, matching original left-aligned behavior,
     * while returning WordObjects for word-by-word highlighting.
     */
    renderRichText (x: number, y: number, textSegments: TextSegment[]): WordObject[] {
        const wordObjects: WordObject[] = [];
        let offsetX = x; // Starting X position (left-aligned)
        let offsetY = y; // Starting Y position
        let lineIndex = 0;

        textSegments.forEach(segment => {
            const parts = segment.text.split("\n");
            let wordIndex = 0;

            parts.forEach((part, partIndex) => {
                if (partIndex > 0) {
                    offsetX = x; // Reset X for new line
                    offsetY += 40; // Move Y down for new line (same as original)
                    lineIndex++;
                }

                const textStyle = {
                    font: `${segment.style?.fontWeight || '600'} ${segment.style?.fontSize || '30px'} ${segment.style?.fontFamily || 'Calibri'}`,
                    color: segment.style?.fill || "#ffffff",
                };

                const words = part.split(/\s+/).filter(word => word.length > 0);
                words.forEach(word => {
                    const textObject = this.add.text(offsetX, offsetY, word, textStyle)
                        .setOrigin(0, 0); // Top-left origin to match original behavior

                    wordObjects.push({
                        textObject,
                        startX: offsetX,
                        width: textObject.width,
                        lineIndex,
                        wordIndex,
                        originalStyle: { color: textStyle.color } // Store original color
                    });

                    offsetX += textObject.width + 5; // Add space between words (adjustable)
                    wordIndex++;
                });
            });
        });

        return wordObjects;
    }
    // Updated scene logic
    renderDualText() {
        if (SCRIPT[this.scene.key]) {
            const isSpanish = CURRENT_SETTINGS.gameState.language === Language.Spanish;
            const sceneScript = SCRIPT[this.scene.key];
            const preferredText = isSpanish ? sceneScript.spanishText : sceneScript.englishText;
            const alternateText = isSpanish ? sceneScript.englishText : sceneScript.spanishText;

            // Render preferred text at original position
            const preferredWordObjects = this.renderRichText(sceneScript.preferredX, sceneScript.preferredY, preferredText);
            const preferredHighlighter = new TextHighlighter(preferredWordObjects);

            // Render alternate text below preferred text (offset Y by 100 pixels, adjust as needed)
            const alternateWordObjects = this.renderRichText(sceneScript.preferredX, sceneScript.preferredY + 100, alternateText);
            const alternateHighlighter = new TextHighlighter(alternateWordObjects);

            // Base word timings for preferred text
            const preferredWordTimings = [
                { word: "Clarita", startTime: 0.0 },
                { word: "se", startTime: 0.4 },
                { word: "miró", startTime: 0.8 },
                { word: "en", startTime: 1.2 },
                { word: "el", startTime: 1.6 },
                { word: "espejo", startTime: 2.0 },
                { word: "y", startTime: 2.4 },
                { word: "dijo", startTime: 2.8 },
                { word: "¡Yo", startTime: 3.2 },
                { word: "soy", startTime: 3.6 },
                { word: "muy", startTime: 4.0 },
                { word: "especial!", startTime: 4.4 }
            ];

            // Offset alternate timings (e.g., start 5 seconds after preferred text ends)
            const delayOffset = preferredWordTimings[preferredWordTimings.length - 1].startTime + 1.0; // 4.4 + 1.0 = 5.4s
            const alternateWordTimings = [
                { word: "Clarita", startTime: delayOffset + 0.0 },
                { word: "looked", startTime: delayOffset + 0.4 },
                { word: "at", startTime: delayOffset + 0.8 },
                { word: "herself", startTime: delayOffset + 1.2 },
                { word: "in", startTime: delayOffset + 1.6 },
                { word: "the", startTime: delayOffset + 2.0 },
                { word: "mirror", startTime: delayOffset + 2.4 },
                { word: "and", startTime: delayOffset + 2.8 },
                { word: "said", startTime: delayOffset + 3.2 },
                { word: "I", startTime: delayOffset + 3.6 },
                { word: "am", startTime: delayOffset + 4.0 },
                { word: "very", startTime: delayOffset + 4.4 },
                { word: "special!", startTime: delayOffset + 4.8 }
            ];

            console.log("Starting preferred text highlight simulation...");
            preferredHighlighter.syncWithAudio(preferredWordTimings);

            console.log("Starting alternate text highlight simulation...");
            alternateHighlighter.syncWithAudio(alternateWordTimings);
        }
    };
}

/* END-USER-CODE */

// Highlight manager class to handle updates efficiently
class TextHighlighter {
    private wordObjects: WordObject[];
    private currentHighlight: Phaser.GameObjects.Text | null = null;

    constructor(wordObjects: WordObject[]) {
        this.wordObjects = wordObjects;
    }

    highlightWord(wordIndex: number, duration: number = 500) {
        // Reset previous highlight to its original style
        if (this.currentHighlight) {
            const prevWordObj = this.wordObjects.find(obj => obj.textObject === this.currentHighlight);
            if (prevWordObj) {
                prevWordObj.textObject.setStyle({ color: prevWordObj.originalStyle.color });
            }
        }

        const wordObj = this.wordObjects[wordIndex];
        if (wordObj) {
            wordObj.textObject.setStyle({ color: '#800080' }); // Purple highlight
            this.currentHighlight = wordObj.textObject;

            // Reset to original style after duration
            this.wordObjects[0].textObject.scene.time.delayedCall(duration, () => {
                if (this.currentHighlight === wordObj.textObject) {
                    wordObj.textObject.setStyle({ color: wordObj.originalStyle.color });
                    this.currentHighlight = null;
                }
            });
        }
    }

    // Modified to test without audio
    syncWithAudio(wordTimings: { word: string, startTime: number }[]) {
        // Simulate timing without actual audio
        wordTimings.forEach((timing, index) => {
            const scene = this.wordObjects[0].textObject.scene;
            scene.time.delayedCall(timing.startTime * 1000, () => {
                this.highlightWord(index);
                console.log(`Highlighted: "${timing.word}" at ${timing.startTime}s`);
            });
        });
    }
}

/* END OF COMPILED CODE */

// You can write more code here
