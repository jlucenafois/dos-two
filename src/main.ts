import Phaser from "phaser";
import WebFont from "webfontloader"; // Import WebFontLoader
import OB_Preload from "./scenes/OB/OB_Preload";
import OB_1 from "./scenes/OB/OB_1";
import OB_2 from "./scenes/OB/OB_2";
import OB_3_1 from "./scenes/OB/OB_3_1";
import OB_3_2 from "./scenes/OB/OB_3_2";
import OB_4 from "./scenes/OB/OB_4";
import P_0 from "./scenes/story/P_0";
import P_1 from "./scenes/story/P_1";
import P_2 from "./scenes/story/P_2";
import P_3 from "./scenes/story/P_3";
import P_4 from "./scenes/story/P_4";
import P_5 from "./scenes/story/P_5";
import P_6 from "./scenes/story/P_6";
import OB_UI from "./scenes/UI/OB_UI";
import WC_Preload from "./scenes/WordCrafter/WC_Preload";
import WC_ChooseTheme from "./scenes/WordCrafter/WC_ChooseTheme";
import WC_Game from "./scenes/WordCrafter/WC_Game";

class Boot extends Phaser.Scene {
	constructor() {
		super("Boot");
	}

	preload() {
		this.load.pack("pack", "assets/preload/preload-asset-pack.json");
		// Load Raleway with Web Font Loader
		WebFont.load({
			google: {
				families: ["Raleway"], // Specify weights (e.g., 400 for regular, 700 for bold)
			},
			active: () => {
				console.log("Raleway font loaded!");
			},
		});
	}

	create() {
		this.scene.start("OB_Preload");
	}
}

window.addEventListener("load", function () {
	const game = new Phaser.Game({
		width: 1728,
		height: 1117,
		parent: "game-container",
		transparent: true,
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH,
		},
        physics: {
            default: 'matter',
            matter: {
                debug:true,
                gravity: { x:0,y: 0 },
            }
        },
		scene: [
			Boot,
			OB_Preload,
			OB_UI,
			OB_1,
			OB_2,
			OB_3_1,
			OB_3_2,
			OB_4,
			P_0,
			P_1,
			P_2,
			P_3,
			P_4,
			P_5,
			P_6,
			WC_Preload,
			WC_ChooseTheme,
			WC_Game,
		],
	});

	game.scene.start("Boot");
});
