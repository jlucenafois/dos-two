#!/bin/bash

for i in $(seq 6 32); do
  cat <<EOF > P_$i.ts
// You can write more code here

/* START OF COMPILED CODE */

import P_Base from "./P_Base";
/* START-USER-IMPORTS */


/* END-USER-IMPORTS */

export default class P_$i extends P_Base {

	constructor() {
		super("P_$i");

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
		this.editorCreate();
		super.create()
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
EOF
done
