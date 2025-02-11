export class Settings {
    gameState: { currentScene: string | null; prevScene: string | null };

    constructor() {
        this.gameState = {
            currentScene: null,
            prevScene: null
        };
    }
}

export const CURRENT_SETTINGS = new Settings();

/**
 * Updates the game state by setting prevScene to the currentScene
 * and updating currentScene to the new scene key.
 * @param scene The scene instance (should have a 'key' property)
 */
export function updateGameState(scene: Phaser.Scene) {
    CURRENT_SETTINGS.gameState.prevScene = CURRENT_SETTINGS.gameState.currentScene;
    CURRENT_SETTINGS.gameState.currentScene = scene.scene.key;
}
