export default class WC_Game extends Phaser.Scene {
	private theme: string = "Mirror";

	constructor() {
		super("WC_Game");
	}

	init({ theme }: { theme: string }): void {
		this.theme = theme;
	}

	editorCreate(): void {
		this.events.emit("scene-awake");
	}

	create() {
		this.editorCreate();
		this.events.emit("updateUI", "show_exit_button");
		this.events.emit("updateUI", "change_background", "#ffffff"); // Notify UI
	}
}
