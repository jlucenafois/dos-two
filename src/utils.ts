import { addCoins, CURRENT_SETTINGS, Language } from "./settings";
// Text Types
import { WordObject } from "../types/text/WordObject";
import { SingleText } from "../types/text/SingleText";
import { BoundedText } from "../types/text/BoundedText";
// Shape Types
import { Shape } from "../types/shape/Shape";
import { SupportedShape } from "../types/shape/SupportedShape";
import { ShapeStyle } from "../types/shape/ShapeStyle";
import { DualComponent } from "../types/components/DualComponent";
import { Scene } from "phaser";
import { SingleComponent } from "../types/components/SingleComponent";
import { Image } from "../types/image/Image";
import Base from "./scenes/Base";
import P_Base from "./scenes/story/P_Base";

type HoverAudioEntry = {
    object: Phaser.GameObjects.GameObject;
    audioKey: string;
};

let currentAudio: Phaser.Sound.BaseSound | null = null;
let currentObject: Phaser.GameObjects.GameObject | null = null;

export function playAudioSequence(
    scene: Phaser.Scene,
    audioKeys: string[],
    onComplete?: () => void,
    delayBetween: number = 0 // in milliseconds
) {
    if (!audioKeys || audioKeys.length === 0) return;

    let currentIndex = 0;
    let currentAudio: Phaser.Sound.BaseSound | null = null;

    const playNext = () => {
        if (currentIndex >= audioKeys.length) {
            currentAudio = null;
            if (onComplete) onComplete();
            return;
        }

        const key = audioKeys[currentIndex];
        currentAudio = scene.sound.add(key);
        currentAudio.play();

        currentAudio.once("complete", () => {
            currentIndex++;

            if (delayBetween > 0) {
                scene.time.delayedCall(delayBetween, playNext);
            } else {
                playNext();
            }
        });
    };

    playNext();

    // Optional: return manual stop function
    return () => {
        if (currentAudio && currentAudio.isPlaying) {
            currentAudio.stop();
            currentAudio.destroy();
        }
    };
}

/**
 * Plays a background or title audio once, unless interrupted by hover.
 */
export function playBackgroundAudio(scene: Phaser.Scene, audioKey: string) {
    stopCurrentAudio(); // just in case
    currentAudio = scene.sound.add(audioKey);
    currentAudio.play();
    currentObject = null;

    currentAudio.once("complete", () => {
        currentAudio = null;
    });
}

/**
 * Attaches hover-based audio playback to a display object.
 * If another object’s audio is playing, it will stop and play the new one.
 */
export function enableHoverAudio(scene: Phaser.Scene, entry: HoverAudioEntry) {
    let hasPlayed = false;

    entry.object.setInteractive({ useHandCursor: true });

    entry.object.on("pointerover", () => {
        if (currentObject !== entry.object || !hasPlayed) {
            stopCurrentAudio();

            currentAudio = scene.sound.add(entry.audioKey);
            currentObject = entry.object;
            currentAudio.play();
            hasPlayed = true;

            currentAudio.once("complete", () => {
                hasPlayed = false;
            });
        }
    });
}

function stopCurrentAudio() {
    if (currentAudio && currentAudio.isPlaying) {
        currentAudio.stop();
        currentAudio.destroy();
    }
    currentAudio = null;
    currentObject = null;
}


export function renderSingleComponent(context: Base, sc: SingleComponent) {
    if (sc.singleImage) renderImage(context, sc.singleImage, sc.isCorrect ? sc.isCorrect : false)
    if (sc.singleShape) renderShape(context, sc.singleShape)
    if (sc.singleText) renderRichText(context, sc.singleText)
    if (sc.boundedText) {
        renderBoundedText(context, sc.boundedText, sc.boundedText.box === "img" ? sc.singleImage! : sc.singleShape!)
    }
}
/**
     * 
     */
export function renderDualComponent(context: P_Base, dc: DualComponent, onComplete?: () => void) {
    const isSpanish = CURRENT_SETTINGS.gameState.language === Language.Spanish;
    const coordinates = dc.coordinates;

    if (!dc.dualShape) {
        onComplete?.(); // still trigger if nothing renders
        return;
    }

    const preferredBox = isSpanish ? dc.dualShape.spanishShape : dc.dualShape.englishShape;
    const alternateBox = isSpanish ? dc.dualShape.englishShape : dc.dualShape.spanishShape;

    const preferredShape: Shape = {
        x: coordinates.preferredX,
        y: coordinates.preferredY,
        type: preferredBox.type,
        style: preferredBox.style,
    };

    const alternateShape: Shape = {
        x: coordinates.alternateX,
        y: coordinates.alternateY,
        type: alternateBox.type,
        style: alternateBox.style,
    };

    renderDualShape(context, preferredShape, alternateShape);

    if (dc.dualText) {
        const dt = dc.dualText;
        const preferredText = isSpanish ? dt.spanishText : dt.englishText;
        const alternateText = isSpanish ? dt.englishText : dt.spanishText;

        if (preferredText.box === 'shape' && alternateText.box === 'shape') {
            renderDualText(context, preferredText, alternateText, preferredShape, alternateShape, onComplete); // ✅ pass callback down
            return;
        }
    }
    onComplete?.(); // if no dualText
}

export function renderBoundedText(context: Scene, bt: BoundedText, box: Image | Shape) {

    // --- 1. Determine Bounding Box Dimensions and Center ---
    let boxX: number;
    let boxY: number;
    let boxWidth: number;
    let boxHeight: number;

    // Check if the box is a Shape (has 'type' and 'style' properties)
    if ('type' in box && 'style' in box) { // It's a Shape
        const shapeBox = box as Shape;
        boxX = shapeBox.x;
        boxY = shapeBox.y;
        boxWidth = shapeBox.style.width;
        boxHeight = shapeBox.style.height;
    }
    // Check if the box is an Image (has 'default' property - adjust if needed)
    else if ('default' in box) { // Assume it's an Image
        const imageBox = box as Image;
        boxX = imageBox.x;
        boxY = imageBox.y;

        // --- IMPORTANT ASSUMPTION ---
        // We assume the Image type has width and height properties.
        // If not, you'll need to get dimensions differently, e.g.,
        // from the texture cache: context.textures.get(imageBox.default).getSourceImage()
        if (typeof (imageBox as any).width === 'number' && typeof (imageBox as any).height === 'number') {
            boxWidth = (imageBox as any).width;
            boxHeight = (imageBox as any).height;
        } else {
            // Fallback: Try getting dimensions from the texture cache
            try {
                const texture = context.textures.get(imageBox.default);
                const source = texture.getSourceImage();
                boxWidth = source.width;
                boxHeight = source.height;
                console.warn(`renderBoundedText: Image box type is missing width/height. Using texture dimensions (${boxWidth}x${boxHeight}) as fallback.`);
            } catch (e) {
                console.warn("renderBoundedText: Image box is missing width/height properties and texture couldn't be read. Using default fallback dimensions (100x50). Centering may be inaccurate.", e);
                // Provide a fallback if dimensions are critical and unavailable
                boxWidth = 100; // Example fallback width
                boxHeight = 50;  // Example fallback height
            }
        }
    } else {
        console.error("renderBoundedText: Invalid box type provided. Cannot determine bounds.", box);
        return; // Exit if the box type is unrecognized
    }

    // Calculate the center of the bounding box
    const boxCenterX = boxX + boxWidth / 2;
    const boxCenterY = boxY + boxHeight / 2;

    // --- 2. Pre-calculate Text Dimensions ---
    if (!bt.content || bt.content.length === 0) {
        console.log("renderBoundedText: No text content provided.");
        return; // No text to render
    }

    // Create a temporary, invisible text object to measure the text block's size.
    // Use the styling from the first segment for measurement purposes. This is an
    // approximation if subsequent segments have significantly different styles.
    const firstSegment = bt.content[0];
    // Ensure there's a default style if the first segment lacks one
    const measureStyle = {
        font: `${firstSegment.style?.fontWeight || '600'} ${firstSegment.style?.fontSize || '24px'} ${firstSegment.style?.fontFamily || 'Raleway'}`,
        // color, align, etc. don't affect Phaser's default width/height calculation
    };
    // Concatenate all text segments, preserving line breaks, for accurate measurement.
    const fullText = bt.content.map(segment => segment.text).join('');

    // Create the temporary text object off-screen or invisible
    const tempText = context.add.text(0, 0, fullText, measureStyle)
        .setOrigin(0, 0) // Measure from top-left
        .setVisible(false);

    const textWidth = tempText.width;
    const textHeight = tempText.height;

    // Clean up the temporary object
    tempText.destroy();

    // --- 3. Calculate Target Coordinates for renderRichText ---
    // We want the top-left corner (x, y) for renderRichText such that
    // the measured text block (textWidth x textHeight) is centered.
    const targetX = boxCenterX - textWidth / 2;
    const targetY = boxCenterY - textHeight / 2; // ✅ Shift text up by 10 pixels
    ;

    // --- 4. Prepare SingleText for Rendering ---
    const singleTextToRender: SingleText = {
        x: targetX,
        y: targetY,
        content: bt.content // Use the original rich text content segments
    };

    // --- 5. Render the Text ---
    // Call the existing renderRichText function with the calculated coordinates.
    // It will handle rendering the segments word by word starting from targetX, targetY.
    return renderRichText(context, singleTextToRender);

    // Note: This centers the *bounding box* of the text block as it would be rendered
    // by renderRichText (handling its own line breaks via \n). It does *not*
    // automatically wrap text that exceeds the boxWidth. For automatic wrapping
    // within bounds, Phaser's built-in Text object with wordWrap enabled might
    // be more suitable than the current renderRichText implementation.
}
// img holds the og properties from script.ts
// renderedImage is the object on screen that can mutate
// isCorrect is just a shortcut to checking if isCorrect exists in img and if it is true
function handleQuizClick(context: Base, img: Image, renderedImage: Phaser.GameObjects.Image, isCorrect: boolean) {
    if (isCorrect) {
        addCoins(50);
        context.events.emit("updateCoinsUI");
        context.events.emit("enableForwardNav");
        context.renderedComponents.iterate((child: Phaser.GameObjects.GameObject) => {
            if ('removeInteractive' in child) {
                (child as Phaser.GameObjects.GameObject & { removeInteractive: () => void }).removeInteractive();
            }
        });
    }

}

export function renderImage(context: Base, img: Image, isCorrect: boolean) {
    let originX = 0;
    let originY = 0;

    if (img.origin && img.origin.length === 2) {
        originX = img.origin[0];
        originY = img.origin[1];
    }

    const renderedImage = context.add.image(img.x, img.y, img.default).setOrigin(originX, originY);

    // Store reference
    (context as Base).renderedComponents.add(renderedImage);

    let clicked = false;
    // quiz-specific
    if (img.hovered && img.pressed && img.feedback) {
        renderedImage.setInteractive({ useHandCursor: true });

        // Mouse hover effect
        renderedImage.on("pointerover", () => {
            if (!clicked) {
                renderedImage.setTexture(img.hovered!);
            }
        });

        // Mouse out effect (Reset to normal)
        renderedImage.on("pointerout", () => {
            if (!clicked) {
                renderedImage.setTexture(img.default);
            }
        });

        // Mouse press effect
        renderedImage.on("pointerdown", () => {
            if (!clicked) {
                renderedImage.setTexture(img.pressed!);
            }
        });

        // Release effect (show feedback texture and set clicked to true)
        renderedImage.on("pointerup", () => {
            if (!clicked) {
                renderedImage.setTexture(img.feedback!);
                clicked = true;
                handleQuizClick(context, img, renderedImage, isCorrect);
            }
        });
    }

}
/**
* 
*/
export function renderShape(context: Scene, ss: Shape) {
    const shapeRenderer: Record<SupportedShape, (x: number, y: number, style: ShapeStyle) => void> = {
        [SupportedShape.RoundedRect]: (x: number, y: number, style: ShapeStyle) => {
            const graphics = context.add.graphics();

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
            (context as Base).renderedComponents.add(graphics);
        },
    };

    const { x, y, type, style } = ss;
    // Call the renderer
    shapeRenderer[type](x, y, style);

}
/**
* 
*/
export function renderDualShape(context: Scene, preferredShape: Shape, alternateShape: Shape) {
    renderShape(context, preferredShape);
    renderShape(context, alternateShape);
}

/**
* Renders text dynamically, matching original left-aligned behavior,
* while returning WordObjects for word-by-word highlighting.
*/
export function renderRichText(context: Scene, st: SingleText): WordObject[] {
    const wordObjects: WordObject[] = [];
    let offsetX = st.x; // Starting X position (left-aligned)
    let offsetY = st.y; // Starting Y position
    let textSegments = st.content // text content
    let lineIndex = 0;

    textSegments.forEach(segment => {
        const parts = segment.text.split("\n");
        let wordIndex = 0;

        parts.forEach((part, partIndex) => {
            if (partIndex > 0) {
                offsetX = st.x; // Reset X for new line
                const lineHeight = segment.style?.fontSize ? Number(segment.style.fontSize) : 24;
                offsetY += lineHeight + 8; // small buffer
                lineIndex++;
            }

            const words = part.split(/\s+/).filter(word => word.length > 0);
            words.forEach(word => {
                const hasStroke = segment.style?.strokeColor !== undefined || segment.style?.strokeWeight !== undefined;
                const hasShadow = segment.style?.shadowOffsetX !== undefined
                    || segment.style?.shadowOffsetY !== undefined
                    || segment.style?.shadowColor !== undefined
                    || segment.style?.shadowBlur !== undefined;

                // 1. Optional: Stroke + Shadow layer (render only if defined)
                if (hasStroke || hasShadow) {
                    const strokeLayer = context.add.text(offsetX - 1, offsetY - 1, word, {
                        font: `${segment.style?.fontWeight || '600'} ${segment.style?.fontSize || '24px'} ${segment.style?.fontFamily || 'Raleway'}`,
                        color: segment.style?.strokeColor || "#FFFFFF",
                        stroke: segment.style?.strokeColor || "#FFFFFF",
                        strokeThickness: segment.style?.strokeWeight || 1.5,
                    })
                        .setOrigin(0, 0);

                    if (hasShadow) {
                        strokeLayer.setShadow(
                            segment.style?.shadowOffsetX || 1,
                            segment.style?.shadowOffsetY || 1,
                            segment.style?.shadowColor || "rgba(0, 0, 0, 0.15)",
                            segment.style?.shadowBlur || 2,
                            false,
                            true
                        );
                    }

                    (context as Base).renderedComponents.add(strokeLayer);
                }

                // 2. Main text (always rendered)
                const textObject = context.add.text(offsetX, offsetY, word, {
                    font: `${segment.style?.fontWeight || '600'} ${segment.style?.fontSize || '24px'} ${segment.style?.fontFamily || 'Raleway'}`,
                    color: segment.style?.fill || "#A3A3A3",
                    stroke: undefined,
                    strokeThickness: 0,
                })
                    .setOrigin(0, 0);

                (context as Base).renderedComponents.add(textObject);

                wordObjects.push({
                    textObject,
                    startX: offsetX,
                    width: textObject.width,
                    lineIndex,
                    wordIndex,
                    originalStyle: { color: segment.style?.fill || "#A3A3A3" }
                });

                offsetX += textObject.width + 5;
                wordIndex++;
            });

        });
    });

    return wordObjects;
}

/**
* Renders dualText dynamically depending on preferred language. 
*/
export function renderDualText(
    context: P_Base,
    preferredText: BoundedText,
    alternateText: BoundedText,
    preferredBox: Image | Shape,
    alternateBox: Image | Shape,
    onComplete?: () => void // ✅ NEW PARAM
) {
    const preferredWordObjects = renderBoundedText(context, preferredText, preferredBox);
    const alternateWordObjects = renderBoundedText(context, alternateText, alternateBox);

    if (preferredWordObjects && alternateWordObjects) {
        const isEnglish = CURRENT_SETTINGS.gameState.language === Language.English;

        const preferredHighlighter = new TextHighlighter(
            preferredWordObjects,
            isEnglish ? Language.English : Language.Spanish
        );

        const alternateHighlighter = new TextHighlighter(
            alternateWordObjects,
            isEnglish ? Language.Spanish : Language.English // switch for alternate
        );

        // const scenePrefix = context.getScenePrefix(); // e.g. "1-0"

        // const transcriptEnglish = context.cache.json.get(`${scenePrefix}e-transcript`)?.words;
        // const audioEnglish = context.sound.add(`${scenePrefix}e-audio`);

        // const transcriptSpanish = context.cache.json.get(`${scenePrefix}s-transcript`)?.words;
        // const audioSpanish = context.sound.add(`${scenePrefix}s-audio`);

        
        // const transcriptPreferred = isEnglish ? transcriptEnglish : transcriptSpanish;
        // const audioPreferred = isEnglish ? audioEnglish : audioSpanish;
        // const transcriptAlt = isEnglish ? transcriptSpanish : transcriptEnglish;
        // const audioAlt = isEnglish ? audioSpanish : audioEnglish;

        //     playAudioWithSync(context, preferredHighlighter, transcriptPreferred, audioPreferred, 2000, () => {
        //         playAudioWithSync(context, alternateHighlighter, transcriptAlt, audioAlt, 1000, () => {
        //             onComplete?.(); // ✅ call here only after both finish
        //         });
        //     });
        // } else {
        onComplete?.(); // fallback
    }
}
export function playAudioWithSync(context: Scene, highlighter: TextHighlighter, transcript: any, audio: any, delay: number, onComplete?: CallableFunction) {
    context.time.delayedCall(delay, () => {
        highlighter.syncWithAudio(transcript);
        audio.play();
        if (onComplete) audio.once('complete', onComplete);
    });
};



/* END-USER-CODE */

// Highlight manager class to handle updates efficiently
class TextHighlighter {
    private wordObjects: WordObject[];
    private preferredLanguage: Language.English | Language.Spanish;

    constructor(wordObjects: WordObject[], preferredLanguage: Language.English | Language.Spanish) {
        this.wordObjects = wordObjects;
        this.preferredLanguage = preferredLanguage;
    }

    highlightWord(wordIndex: number) {
        const wordObj = this.wordObjects[wordIndex];
        if (wordObj) {
            const highlightColor = this.preferredLanguage === Language.English ? '#3738B4' : '#B00012';
            wordObj.textObject.setStyle({ color: highlightColor });
        }
    }

    syncWithAudio(wordTimings: { text: string, start: number }[]) {
        wordTimings.forEach((timing, index) => {
            const scene = this.wordObjects[0].textObject.scene;
            scene.time.delayedCall(timing.start * 1000, () => {
                this.highlightWord(index);
            });
        });
    }
}
export function getResponsivePos(x: number, y: number, scene: Scene) {
    const baseWidth = 1728;
    const baseHeight = 1117;
    const scaleX = scene.scale.width / baseWidth;
    const scaleY = scene.scale.height / baseHeight;
    return { x: x * scaleX, y: y * scaleY, scale: Math.min(scaleX, scaleY) };
}
export function repositionAll(context: Base) {
    for (const key in context.basePositions) {
        const base = context.basePositions[key];
        const obj = context[key as keyof Base] as Phaser.GameObjects.GameObject;
        if (obj && "setPosition" in obj) {
            const { x, y, scale } = getResponsivePos(base.x, base.y, context);
            (obj as Phaser.GameObjects.Image).setPosition(x, y).setScale(scale);
        }
    }
}

export function generateBasePositions(context: Phaser.Scene): { [key: string]: { x: number; y: number } } {
    const basePositions: { [key: string]: { x: number; y: number } } = {};
    console.log(Object.keys(context))
    for (const key of Object.keys(context)) {
        const value = (context as any)[key];

        if (
            value &&
            typeof value === "object" &&
            "x" in value &&
            "y" in value &&
            typeof value.x === "number" &&
            typeof value.y === "number"
        ) {
            basePositions[key] = { x: value.x, y: value.y };
        }
    }

    return basePositions;
}

