import PreloadBase from "../PreloadBase";
export default class WC_Preload extends PreloadBase {

	constructor() {
		super("WC_Preload", ["WordCrafter"], "WC_Game");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(): void {
        super.preload();
    }
    
    create(): void {
        super.create();
        this.events.emit("updateUI", "change_background", "#ffd439"); // Notify UI
    }
}

/* END OF COMPILED CODE */

// You can write more code here
