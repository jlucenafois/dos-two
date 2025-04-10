/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { SCRIPT } from "../script";
import { CURRENT_SETTINGS, updateGameState } from "../settings";
import { generateBasePositions, repositionAll } from "../utils";
/* END-USER-IMPORTS */

export default class Base extends Phaser.Scene {
	public next_key: string | null;
	public prev_key: string | null;
	public index: number | null;
	public total: number | null;

	public basePositions: {
		[key: string]: { x: number; y: number}
	} = {};

	public renderedComponents: Phaser.GameObjects.GameObject[] = [];
	constructor(key:string) {
		super(key);
		const properties = SCRIPT[key] || {}; // Default to an empty object if SCRIPT[key] is undefined
		this.prev_key = properties.prev_key ?? null;
		this.next_key = properties.next_key ?? null;
		this.index = properties.index ?? null;
		this.total = properties.total ?? null;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	getPrevKey(): string | null {
		return this.prev_key;
	}

	getNextKey(): string | null {
		return this.next_key;
	}

	getPcnt(): number | null {
		if (this.index === null || this.total === null)
			return null
		if (this.index === 0) {
			return 0
		}
		return (this.index / this.total)

	}
	

	editorCreate(): void {

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	create() {
		// Call updateGameState with the passed scene
		updateGameState(this);
		if (this.getPcnt() != null) { 
			this.events.emit("updateProgressBar", CURRENT_SETTINGS.gameState.pcnt); // Notify UI
		}
		// Add a title using the key of the passed scene
		this.addTitle();
		// Runs after the child scene's `create()` method
		this.basePositions = generateBasePositions(this)
		console.log(this.basePositions)
		repositionAll(this); // Reposition initially

		this.scale.on("resize", () => {
			repositionAll(this); // Reposition on window resize
		});
	}
	/**
	 * Adds a title to the scene using the key of the passed scene.
	 */
	addTitle() {
		this.add.text(860, 1000, `${this.scene.key}`, {
			fontSize: '40px',
			fontFamily: 'Arial'
		}).setOrigin(0.5);
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */