import Base from "../Base";
export default class WC_Preload extends Base {

	constructor() {
		super("WC_Preload");
	}

	preload(): void {
        this.load.pack("WordCrafter", "assets/WordCrafter/WordCrafter-asset-pack.json");
        this.load.json('vocabData', 'assets/WordCrafter/words.json');
    }
    
    create(): void {
        super.create();
        this.scene.start("WC_ChooseTheme");
    }
}