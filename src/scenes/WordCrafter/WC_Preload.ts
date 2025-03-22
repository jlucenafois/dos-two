
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import PreloadBase from "../PreloadBase";
import WC_ChooseTheme from "./WC_ChooseTheme";
/* END-USER-IMPORTS */

export default class WC_Preload extends PreloadBase {

	constructor() {
		super("WC_Preload", ["WordCrafter"], "WC_ChooseTheme");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(): void {
        super.preload();
        this.scene.add("WC_ChooseTheme", WC_ChooseTheme);
    }

    create(): void {
        super.create();
    }
}

/* END OF COMPILED CODE */

// You can write more code here
