
// You can write more code here

/* START OF COMPILED CODE */

import Base from "../Base";
/* START-USER-IMPORTS */
import { SCRIPT } from "../../script";
import { renderDualComponent } from "../../utils";
import { DualComponent } from "../../../types/components/DualComponent";

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

        const pageIdx = parseInt(this.scene.key.split("_")[1]);

        // TODO: use other condition for files without audio tracks IF other cases arise
        if (pageIdx !== 0) {
            const languages = [
                { key: "transcript-english", suffix: "e" },
                { key: "transcript-spanish", suffix: "s" }
            ];
            languages.forEach(({ key, suffix }) => {
                this.load.json(this.nameWithKey(key), `assets/transcript/story/json/${pageIdx}${suffix}.json`);
                this.load.audio(this.nameWithKey(`audio-${key}`), `assets/transcript/story/audio/${pageIdx}${suffix}.wav`);
            });
        }
    }


    editorCreate(): void {
        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */
    applyCropMask(container: Phaser.GameObjects.Container, x: number, y: number, width: number, height: number): void {
        const maskShape = this.add.graphics();
        maskShape.fillStyle(0xffffff);
        maskShape.fillRect(x, y, width, height);

        const mask = maskShape.createGeometryMask();

        container.setMask(mask);

        this.children.bringToTop(container);

        maskShape.setVisible(false);
    }


    // Write your code here
    private currentSectionIndex: number = 0;
    private sceneScript!: typeof SCRIPT[string];

    private renderCurrentSection() {
        const section = this.sceneScript.sections?.[this.currentSectionIndex];

        if (!section) {
            return;
        }

        this.renderedComponents.removeAll(true); // Remove old text/images

        let completed = 0;

        if (section.dualComponents) {
            section.dualComponents.forEach((dc: DualComponent) => {
                renderDualComponent(this, dc, () => {
                    completed++;
                    if (completed === section.dualComponents?.length) {
                        if (!section.playedOnce) {
                            this.events.emit("enableForwardNav");
                            section.playedOnce = true;
                        }
                    }
                });
            });
        }
    }

    // You can call this after a click or timeout
    private goToNextSection() {
        this.currentSectionIndex++;
        if (this.sceneScript.sections && this.currentSectionIndex >= this.sceneScript.sections.length) {
            return false
        } else {
            this.renderCurrentSection();
            return true
        }
    }

    create() {
        super.create();
        const sceneScript = SCRIPT[this.scene.key];
        if (!sceneScript || !sceneScript.sections || sceneScript.sections.length === 0) {
            return;
        }

        this.currentSectionIndex = 0; // Track which section you're on
        this.sceneScript = sceneScript; // Save reference

        this.renderCurrentSection(); // Render first section

    }
}     