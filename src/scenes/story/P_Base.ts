
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
        // // TODO: rename transcript files to be 0-indexed and remove this line
        // const pageIdx = parseInt(this.scene.key.split("_")[1]) + 1;
    
        // const languages = [
        //     { key: "transcript-english", suffix: "e" },
        //     { key: "transcript-spanish", suffix: "s" }
        // ];
    
        // languages.forEach(({ key, suffix }) => {
        //     this.load.json(this.nameWithKey(key), `assets/transcript/${pageIdx}${suffix}.json`);
        //     this.load.audio(this.nameWithKey(`audio-${key}`), `assets/transcript/${pageIdx}${suffix}.wav`);
        // });
    }
    

    editorCreate(): void {
        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        const sceneScript = SCRIPT[this.scene.key];
        if (!sceneScript) return; // Early return if no script
        
        const dualComponents = sceneScript.dualComponents;
        dualComponents?.forEach(dc => renderDualComponent(this, dc));
        super.create();
    }
}