
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
    public mainContainer!: Phaser.GameObjects.Container

    private renderCurrentSection() {
        const section = this.sceneScript.sections?.[this.currentSectionIndex];
        if (!section) return;

        this.renderedComponents.removeAll(true); // Clear old text

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

    private panContainer(container: Phaser.GameObjects.Container, deltaX: number, onComplete?: () => void) {
        const duration = 2000;

        this.tweens.add({
            targets: container,
            x: container.x + deltaX,
            ease: 'Sine.easeInOut',
            duration: duration,
            onComplete: onComplete, // ✅ Call back when finished
        });
    }




    // You can call this after a click or timeout
    public goToNextSection(): boolean {

        const currSection = this.sceneScript.sections?.[this.currentSectionIndex];

        this.currentSectionIndex++;
        const nextSection = this.sceneScript.sections?.[this.currentSectionIndex];

        if (!nextSection) {
            return false; // No more sections
        }

        // If there's a panDeltaX for this new section
        if (currSection!.panDeltaX && this.mainContainer) {
            this.panContainer(this.mainContainer, currSection!.panDeltaX, () => {
                this.renderCurrentSection(); // Only render text AFTER panning
            });
        } else {
            this.renderCurrentSection(); // No pan, render immediately
        }

        return true;
    }

    private adjustMainContainerPosition() {
        if (!this.mainContainer) return;
    
        let totalOffset = 0;
    
        for (let i = 0; i < this.currentSectionIndex; i++) {
            const section = this.sceneScript.sections?.[i];
            if (section?.panDeltaX) {
                totalOffset += section.panDeltaX;
            }
        }
    
        this.mainContainer.x = 398 + totalOffset; // 398 is your initial container.x in editorCreate
    }
    
    // You can call this after a click or timeout
    public goToPreviousSection(): boolean {

        if (this.currentSectionIndex === 0) {
            return false; // Already at first section
        }
        
        const currSection = this.sceneScript.sections?.[this.currentSectionIndex];

        this.currentSectionIndex--;
        const prevSection = this.sceneScript.sections?.[this.currentSectionIndex];

        if (!prevSection) {
            return false; // No more sections
        }

        // If there's a panDeltaX for this new section
        if (currSection!.panDeltaX && this.mainContainer) {
            this.panContainer(this.mainContainer, currSection!.panDeltaX, () => {
                this.renderCurrentSection(); // Only render text AFTER panning
            });
        } else {
            this.renderCurrentSection(); // No pan, render immediately
        }

        return true;
    }
    


    create() {
        super.create();
    
        const sceneScript = SCRIPT[this.scene.key];
        if (!sceneScript || !sceneScript.sections || sceneScript.sections.length === 0) {
            return;
        }
    
        // Start at last visited section if set
        this.currentSectionIndex = sceneScript.lastVisitedSectionIndex ?? 0;
        this.sceneScript = sceneScript;
    
        this.adjustMainContainerPosition(); // <<--- 🛠 fix container offset first
        this.renderCurrentSection();
        
    }
    
}