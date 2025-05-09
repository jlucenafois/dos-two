import PreloadBase from "../PreloadBase";
export default class WC_Preload extends PreloadBase {

	constructor() {
		super("WC_Preload", ["WordCrafter"], "WC_ChooseTheme");
	}

	preload(): void {
        super.preload();
        this.load.json('vocabData', 'assets/WordCrafter/words.json');
    }
    
    create(): void {
        super.create();
    }
}