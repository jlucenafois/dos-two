import Phaser from "phaser";
import WebFont from "webfontloader"; // Import WebFontLoader
import OB_Preload from "./scenes/OB/OB_Preload";


class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {
		this.load.pack("pack", "assets/preload/preload-asset-pack.json");
		// Load Raleway with Web Font Loader
        WebFont.load({
            google: {
                families: ["Raleway"] // Specify weights (e.g., 400 for regular, 700 for bold)
            },
            active: () => {
                console.log("Raleway font loaded!");
            }
        });
    }

    create() {
        this.scene.start("OB_Preload");
    }
}

window.addEventListener('load', function () {
	
	const game = new Phaser.Game({
        width: 1728,
		height: 1117,
		parent: 'game-container',
        transparent: true,
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH
		},
		scene: [Boot, OB_Preload]
	});

	game.scene.start("Boot");
});