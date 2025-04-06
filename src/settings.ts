import Base from "./scenes/Base";
export enum Language {
    Spanish = "spanish",
    English = "english"
}
export class Settings {
    gameState: { 
        nextScene: string | null; 
        currScene: string | null; 
        prevScene: string | null; 
        pcnt: number | null; 
        coins: number; 
        language: Language | null; 
        };

    constructor() {
        this.gameState = {
            nextScene: null,
            currScene: null,
            prevScene: null,
            language: null,
            coins: 0,
            pcnt: null,
        };
    }
}

export const CURRENT_SETTINGS = new Settings();

/**
 * Updates the game state by setting prevScene to the currentScene
 * and updating currentScene to the new scene key.
 * @param scene The scene instance (should have a 'key' property)
 */
export function updateGameState(scene: Base) {
    /* Set current scene */
    const currSceneKey = scene.scene.key;
    const prevSceneKey = scene.getPrevKey(); // Use getter
    const nextSceneKey = scene.getNextKey(); // Use getter
    const pcnt = scene.getPcnt(); // Use getter

    CURRENT_SETTINGS.gameState.currScene = currSceneKey;
    CURRENT_SETTINGS.gameState.prevScene = prevSceneKey;
    CURRENT_SETTINGS.gameState.nextScene = nextSceneKey;
    CURRENT_SETTINGS.gameState.pcnt = pcnt;
}

export function addCoins(value:number) {
    CURRENT_SETTINGS.gameState.coins += value
}