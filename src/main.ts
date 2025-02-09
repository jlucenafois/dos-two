import Phaser from "phaser";
import Preload from "./scenes/Preload";
import OB_1 from "./scenes/OB/OB_1";
import OB_2 from "./scenes/OB/OB_2";
import OB_3_1 from "./scenes/OB/OB_3_1";
import OB_3_2 from "./scenes/OB/OB_3_2";
import OB_UI from "./scenes/OB/OB_UI";

class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {

        this.load.pack("pack", "assets/preload-asset-pack.json");
    }

    create() {

       this.scene.start("Preload");
    }
}

window.addEventListener('load', function () {
	
	const game = new Phaser.Game({
		width: 1728,
		height: 1117,
		transparent: false, // Ensure transparency is disabled to allow background color
		backgroundColor: "#7580FF", // Set background color
		parent: "game-container",
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH
		},
		scene: [Boot, Preload, OB_UI, OB_1, OB_2, OB_3_1, OB_3_2]
	});

	game.scene.start("Boot");
});