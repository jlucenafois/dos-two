
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import OB_1 from "./OB_1";
import OB_2 from "./OB_2";
import OB_3_1 from "./OB_3_1";
import OB_3_2 from "./OB_3_2";
import OB_4 from "./OB_4";
import P_0 from "../story/P_0";
import P_1 from "../story/P_1";
import P_2 from "../story/P_2";
import P_3 from "../story/P_3";
import P_4 from "../story/P_4";
import P_5 from "../story/P_5";
import P_6 from "../story/P_6";
import OB_UI from "../UI/OB_UI";

/* END-USER-IMPORTS */
import PreloadBase from "../PreloadBase";
export default class OB_Preload extends PreloadBase {

	constructor() {
		super("OB_Preload", ["OB", "UI"], "OB_1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

    preload() {
        super.preload();
        this.scene.add("OB_UI", OB_UI);
        this.scene.add("OB_1", OB_1);
        this.scene.add("OB_2", OB_2);
        this.scene.add("OB_3_1", OB_3_1);
        this.scene.add("OB_3_2", OB_3_2);
        this.scene.add("OB_4", OB_4);
        this.scene.add("P_0", P_0);
        this.scene.add("P_1", P_1);
        this.scene.add("P_2", P_2);
        this.scene.add("P_3", P_3);
        this.scene.add("P_4", P_4);
        this.scene.add("P_5", P_5);
        this.scene.add("P_6", P_6);
    }

    create(): void {
        super.create();
    }
}

/* END OF COMPILED CODE */

// You can write more code here
