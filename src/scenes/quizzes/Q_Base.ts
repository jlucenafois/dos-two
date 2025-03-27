
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
		super.create();
		 const sceneScript = SCRIPT[this.scene.key];
		if (!sceneScript) return; // Early return if no script
		
		const singleComponents = sceneScript.singleComponents;
		singleComponents?.forEach(sc => renderSingleComponent(this, sc));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
