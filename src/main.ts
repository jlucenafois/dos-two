import Phaser from "phaser";
import WebFont from "webfontloader";
import Preload from "./scenes/Preload";
import OB_1 from "./scenes/OB/OB_1";
import OB_2 from "./scenes/OB/OB_2";
import OB_3_1 from "./scenes/OB/OB_3_1";
import OB_3_2 from "./scenes/OB/OB_3_2";
import OB_4 from "./scenes/OB/OB_4";
import OB_UI from "./scenes/UI/OB_UI";
import Q_1 from "./scenes/quizzes/Q_1";
import Q_2 from "./scenes/quizzes/Q_2";

// P scenes
import P_0 from "./scenes/story/P_0";
import P_1 from "./scenes/story/P_1";
import P_2 from "./scenes/story/P_2";
import P_3 from "./scenes/story/P_3";
import P_4 from "./scenes/story/P_4";
import P_5 from "./scenes/story/P_5";
import P_6 from "./scenes/story/P_6";
import OB_UI from "./scenes/UI/OB_UI";
import DD_0 from "./scenes/games/DD_0";
import MG_1 from "./scenes/games/MG_1";
import MG_2 from "./scenes/games/MG_2";
import MG_3 from "./scenes/games/MG_3";
import P_7 from "./scenes/story/P_7";
import P_8 from "./scenes/story/P_8";
import P_9 from "./scenes/story/P_9";
import P_10 from "./scenes/story/P_10";
import P_11 from "./scenes/story/P_11";
import P_12 from "./scenes/story/P_12";
import P_13 from "./scenes/story/P_13";
import P_14 from "./scenes/story/P_14";
import P_15 from "./scenes/story/P_15";
import P_16 from "./scenes/story/P_16";
import P_17 from "./scenes/story/P_17";
import P_18 from "./scenes/story/P_18";
import P_19 from "./scenes/story/P_19";

class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {
		this.load.pack("pack", "assets/preload/preload-asset-pack.json");
		// Load Raleway with Web Font Loader
        WebFont.load({
            google: {
                families: ["Raleway:600,700,800", "Bowlby One"]
            },
            active: () => {
                console.log("Fonts loaded!");
            }
        });
    }
    
    create() {
        this.scene.start("Preload");
    }
}

window.addEventListener('load', function () {
	
	const game = new Phaser.Game({
        // width: window.innerWidth,
		// height: window.innerHeight,
        width: 1728,
		height: 1117,
        backgroundColor: '#7580FF',
        parent: 'game-container',
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH
		},
		scene: [
            Boot, Preload, OB_UI, OB_1, OB_2, OB_3_1, OB_3_2, OB_4,
            P_0, P_1, P_2, P_3, P_4, P_5, P_6, P_7, 
            P_8, P_9, P_10, P_11, P_12, P_13, P_14, P_15, P_16,
            P_17, P_18, P_19,
            Q_1, Q_2, 
            DD_0, MG_1, MG_2, MG_3
        ]        
	});

	game.scene.start("Boot");
});