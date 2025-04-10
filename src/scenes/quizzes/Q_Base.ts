
// You can write more code here

/* START OF COMPILED CODE */

import { SCRIPT } from "../../script";
import { renderSingleComponent } from "../../utils";
import Base from "../Base";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Q_Base extends Base {

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
		const sceneScript = SCRIPT[this.scene.key];
		if (!sceneScript) return; // Early return if no script
		this.events.emit("disableForwardNav"); // Notify UI
		const singleComponents = sceneScript.singleComponents;
		singleComponents?.forEach(sc => renderSingleComponent(this, sc));
		super.create();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
