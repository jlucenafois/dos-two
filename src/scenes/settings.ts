export enum Language {
    Spanish = "spanish",
    English = "english"
}
export class Settings {
    gameState: { 
        nextScene: string | null; 
        currScene: string | null; 
        prevScene: string | null; 
        language: Language | null; 
        };

    constructor() {
        this.gameState = {
            nextScene: null,
            currScene: null,
            prevScene: null,
            language: null
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
    
    const prevScene = CURRENT_SETTINGS.gameState.currScene;
    /* Set current scene */
    const currSceneKey = scene.scene.key;
    CURRENT_SETTINGS.gameState.currScene = currSceneKey

    /* set gamestate with format "P_i" */
    const match = currSceneKey.match(/^P_(\d+)$/);
    if (match) {
        const currIndex = parseInt(match[1], 10)
        const prevSceneKey = `P_${currIndex - 1}`;
        const nextSceneKey = `P_${currIndex + 1}`;
        
        CURRENT_SETTINGS.gameState.nextScene = scene.scene.manager.keys[nextSceneKey] ? nextSceneKey : null;
        CURRENT_SETTINGS.gameState.prevScene = scene.scene.manager.keys[prevSceneKey] ? prevSceneKey : null;
    } else { 
    /* set gamestate in other pages */ 
    /* TODO: fix indexing (currently just switching scenes) */
        CURRENT_SETTINGS.gameState.nextScene = null;
        CURRENT_SETTINGS.gameState.prevScene = prevScene;
    }
    console.debug(CURRENT_SETTINGS.gameState)
}
