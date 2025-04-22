
// You can write more code here

/* START OF COMPILED CODE */

import Base from "../Base";
/* START-USER-IMPORTS */
import { SCRIPT } from "../../script";
import { renderDualComponent } from "../../utils";

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

    // Write your code here

    create() {
        const sceneScript = SCRIPT[this.scene.key];
        if (!sceneScript || !sceneScript.dualComponents) {
            super.create();
            return;
        }
        
        // TODO: remove
        this.events.emit("enableForwardNav");
        // If already played once, allow skipping immediately
        if (sceneScript.playedOnce === true) {
            this.events.emit("enableForwardNav");
        } else {
            // this.events.emit("disableForwardNav");
        }

        const dualComponents = sceneScript.dualComponents;
        let completed = 0;

        dualComponents.forEach(dc => {
            renderDualComponent(this, dc, () => {
                completed++;
                if (completed === dualComponents.length) {
                    if (!sceneScript.playedOnce) {
                        this.events.emit("enableForwardNav"); // only emit if not previously allowed
                    }
                    sceneScript.playedOnce = true;
                }
            });
        });

        super.create();
    }
}     