
// You can write more code here

/* START OF COMPILED CODE */

import Base from "../Base";
/* START-USER-IMPORTS */
// Global
import { CURRENT_SETTINGS, Language } from "../settings";
import { SCRIPT } from "../script";
// Text Types
import { WordObject } from "../../../types/text/WordObject";
import { DualText } from "../../../types/text/DualText";
import { SingleText } from "../../../types/text/SingleText";
// Shape Types
import { DualShape } from "../../../types/shape/DualShape";
import { Shape } from "../../../types/shape/Shape";
import { SupportedShape } from "../../../types/shape/SupportedShape";
import { ShapeStyle } from "../../../types/shape/ShapeStyle";
import { DualComponent } from "../../../types/components/DualComponent";
import { DualCoordinates } from "../../../types/components/DualCoordinates";
/* END-USER-IMPORTS */

export default class P_Base extends Base {
    constructor(key: string) {
        super(key);

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    // this is needed to load the correct transcript and audio files, otherwise it will keep using the first one, maybe there's a better fix for this
    nameWithKey(name: string) {
        return name + "-" + this.scene.key;
    }

    preload() {
        // TODO: rename transcript files to be 0-indexed and remove this line
        const pageIdx = parseInt(this.scene.key.split("_")[1]) + 1;
    
        const languages = [
            { key: "transcript-english", suffix: "e" },
            { key: "transcript-spanish", suffix: "s" }
        ];
    
        languages.forEach(({ key, suffix }) => {
            this.load.json(this.nameWithKey(key), `assets/transcript/${pageIdx}${suffix}.json`);
            this.load.audio(this.nameWithKey(`audio-${key}`), `assets/transcript/${pageIdx}${suffix}.wav`);
        });
    }
    

    editorCreate(): void {
        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create();
        
        const sceneScript = SCRIPT[this.scene.key];
        if (!sceneScript) return; // Early return if no script
        
        const dualComponents = sceneScript.dualComponents;
        dualComponents?.forEach(dc => this.renderDualComponent(dc));
    }

    /**
     * 
     */
    renderDualComponent(dc: DualComponent) {
         // render dual shapes and texts
         if (dc.dualShape) this.renderDualShape(dc.coordinates, dc.dualShape);
         if (dc.dualText) this.renderDualText(dc.coordinates, dc.dualText);
    }
    /**
     * 
     */
    renderShape(ss: Shape) {
        const shapeRenderer: Record<SupportedShape, (x: number, y:number, style:ShapeStyle) => void> = {
			[SupportedShape.RoundedRect]: (x:number, y:number, style:ShapeStyle) => {
                const graphics = this.add.graphics();
                const { strokeWeight, strokeColor, fillColor, fillAlpha, shadowOffset, shadowFill, shadowAlpha } = style.style;

                if (shadowFill !== undefined && shadowFill !== null) {
                    graphics.fillStyle(shadowFill, shadowAlpha ?? 1.0);
                    graphics.fillRoundedRect(x + (shadowOffset ?? 10), y + (shadowOffset ?? 10), style.width, style.height, style.radius ?? 10);
                }
                if (fillColor !== undefined && fillColor !== null) {
                    graphics.fillStyle(fillColor, fillAlpha ?? 1.0);
                    graphics.fillRoundedRect(x, y, style.width, style.height, style.radius ?? 10);
                } 
                if (strokeColor !== undefined && strokeColor !== null) {
                    graphics.lineStyle(strokeWeight ?? 1, strokeColor, 1.0);
                    graphics.strokeRoundedRect(x, y, style.width, style.height, style.radius ?? 10);
                }
            },
     };

        const {x, y, type, style} = ss;
        // Call the renderer
        shapeRenderer[type](x, y, style);
    }
    /**
     * 
     */
    renderDualShape(coordinates: DualCoordinates, ds: DualShape) {
        const isSpanish = CURRENT_SETTINGS.gameState.language === Language.Spanish;
        const preferredPartialShape = isSpanish ? ds.spanishShape : ds.englishShape;
        const alternatePartialShape = isSpanish ? ds.englishShape : ds.spanishShape;

        // Construct a SingleText object for the preferred text
        const preferredShape: Shape = {
            x: coordinates.preferredX,
            y: coordinates.preferredY,
            type: preferredPartialShape.type, 
            style: preferredPartialShape.style
        };
        // Construct a SingleText object for the preferred text
        const alternateShape: Shape = {
            x: coordinates.alternateX,
            y: coordinates.alternateY,
            type: alternatePartialShape.type, 
            style: alternatePartialShape.style
        };

        this.renderShape(preferredShape);
        this.renderShape(alternateShape);
    }

    /**
     * Renders text dynamically, matching original left-aligned behavior,
     * while returning WordObjects for word-by-word highlighting.
     */
    renderRichText (st:SingleText): WordObject[] {
        const wordObjects: WordObject[] = [];
        let offsetX = st.x; // Starting X position (left-aligned)
        let offsetY = st.y; // Starting Y position
        let textSegments = st.text // text content
        let lineIndex = 0;

        textSegments.forEach(segment => {
            const parts = segment.text.split("\n");
            let wordIndex = 0;

            parts.forEach((part, partIndex) => {
                if (partIndex > 0) {
                    offsetX = st.x; // Reset X for new line
                    offsetY += 40; // Move Y down for new line (same as original)
                    lineIndex++;
                }

                const textStyle = {
                    font: `${segment.style?.fontWeight || '600'} ${segment.style?.fontSize || '24px'} ${segment.style?.fontFamily || 'Raleway'}`,
                    color: segment.style?.fill || "#A3A3A3",
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

    /**
     * Renders dualText dynamically depending on preferred language. 
     */
    renderDualText(coordinates:DualCoordinates, dt: DualText) {
        const isSpanish = CURRENT_SETTINGS.gameState.language === Language.Spanish;
        const preferredText = isSpanish ? dt.spanishText : dt.englishText;
        const alternateText = isSpanish ? dt.englishText : dt.spanishText;

        // Construct a SingleText object for the preferred text
        const preferredSingleText: SingleText = {
            x: coordinates.preferredX,
            y: coordinates.preferredY,
            text: preferredText 
        };
        // Render preferred text at original position
        const preferredWordObjects = this.renderRichText(preferredSingleText);
        const preferredHighlighter = new TextHighlighter(preferredWordObjects);
        
        // Construct a SingleText object for the preferred text
        const alternateSingleText: SingleText = {
            x: coordinates.alternateX,
            y: coordinates.alternateY,
            text: alternateText 
        };
    
        // Render alternate text below preferred text (offset Y by 100 pixels, adjust as needed)
        const alternateWordObjects = this.renderRichText(alternateSingleText);
        const alternateHighlighter = new TextHighlighter(alternateWordObjects);

        const isEnglish = CURRENT_SETTINGS.gameState.language === Language.English;
        const transcriptEnglish = this.cache.json.get(this.nameWithKey("transcript-english")).words;
        const audioEnglish = this.sound.add(this.nameWithKey("audio-transcript-english"));
        const transcriptSpanish = this.cache.json.get(this.nameWithKey("transcript-spanish")).words;
        const audioSpanish = this.sound.add(this.nameWithKey("audio-transcript-spanish"));
        const transcriptPreferred = isEnglish ? transcriptEnglish : transcriptSpanish;
        const audioPreferred = isEnglish ? audioEnglish : audioSpanish;
        const transcriptAlternative = isEnglish ? transcriptSpanish : transcriptEnglish;
        const audioAlternative = isEnglish ? audioSpanish : audioEnglish;

        this.playAudioWithSync( preferredHighlighter, transcriptPreferred, audioPreferred,2000, () => {
            this.playAudioWithSync( alternateHighlighter, transcriptAlternative, audioAlternative,1000);
        });
    };

    playAudioWithSync( highlighter:TextHighlighter, transcript:any, audio: any,delay:number, onComplete?:CallableFunction) {
        this.time.delayedCall(delay, () => {
            highlighter.syncWithAudio(transcript);
            audio.play();
            if (onComplete) audio.once('complete', onComplete);
        });
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
    syncWithAudio(wordTimings: { text: string, start: number }[]) {
        // Simulate timing without actual audio
        wordTimings.forEach((timing, index) => {
            const scene = this.wordObjects[0].textObject.scene;
            scene.time.delayedCall(timing.start * 1000, () => {
                this.highlightWord(index);
            });
        });
    }
}

/* END OF COMPILED CODE */

// You can write more code here
