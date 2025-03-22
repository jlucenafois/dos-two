import PreloadBase from "../PreloadBase";
export default class OB_Preload extends PreloadBase {
	constructor() {
		super("OB_Preload", ["OB", "UI"], "WC_Preload");
	}

    preload() {
        super.preload();
    }
    
    create(): void {
        super.create();
        this.scene.launch("OB_UI");
    }
}