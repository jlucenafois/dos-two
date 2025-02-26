import { SupportedShape } from "../../types/shape/SupportedShape";
import { DualComponent } from "../../types/components/DualComponent";

let SPANISH_HIGHLIGHT = {fill: '#B00012', } 
let ENGLISH_HIGHLIGHT = {fill: '#3738B4', } 
export const SCRIPT: Record<string, { 
    dualComponents?: DualComponent[]
    // TODO: expand this to allow Single Components
    // singleComponents?: SingleComponent[] 
}> = {
    P_0: {
        dualComponents: [{
            coordinates: {
                preferredX: 928.5,
                preferredY: 445,
                alternateX: 928.5,
                alternateY: 595,
            },
            dualShape: {
                spanishShape: {
                    type: SupportedShape.RoundedRect,
                    style: {
                        width: 419,
                        height: 114,
                        radius: 16,
                        style: {
                            fillColor: 0xFFFFFF,
                            strokeColor: 0xFF9C1A,
                            strokeWeight: 4,
                            shadowOffset: 16,
                            shadowFill: 0xF9A336, 
                            shadowAlpha: 1,
                        }
                    }
                },
                englishShape: {
                    type: SupportedShape.RoundedRect,
                    style:{
                        width: 419,
                        height: 114,
                        radius: 16,
                        style: {
                            fillColor: 0xFFFFFF,
                            strokeColor: 0x4CDAFE,
                            strokeWeight: 4,
                            shadowOffset: 16,
                            shadowFill: 0x01B4ED, 
                            shadowAlpha: 1,
                    }
                    }
                }
            },
            dualText: {
                spanishText: [
                    { text: 'Clarita se mira en el '},
                    { text: 'espejo', style: SPANISH_HIGHLIGHT}, // Highlighted word
                    { text: '\n"Soy especial," dice.'},
                ],
                englishText: [
                    { text: 'Clarita looks in the '},
                    { text: 'mirror', style: ENGLISH_HIGHLIGHT}, // Highlighted word
                    { text: '\n"I am special," she says.'},
                ],
            }
        }],
    },
    P_1: {
        dualComponents: [{
            coordinates: {
                preferredX: 524,
                preferredY: 307,
                alternateX: 500,
                alternateY: 678,
            },
            dualShape: {
                spanishShape: {
                    type: SupportedShape.RoundedRect,
                    style: {
                        width: 419,
                        height: 81,
                        radius: 16,
                        style: {
                            fillColor: 0xFFFFFF,
                            strokeColor: 0xFF9C1A,
                            strokeWeight: 4,
                            shadowOffset: 16,
                            shadowFill: 0xF9A336, 
                            shadowAlpha: 1,
                        }
                    }
                },
                englishShape: {
                    type: SupportedShape.RoundedRect,
                    style:{
                        width: 419,
                        height: 81,
                        radius: 16,
                        style: {
                            fillColor: 0xFFFFFF,
                            strokeColor: 0x4CDAFE,
                            strokeWeight: 4,
                            shadowOffset: 16,
                            shadowFill: 0x01B4ED, 
                            shadowAlpha: 1,
                    }
                    }
                }
            },
            dualText: {
                spanishText: [
                    { text: '"¡Hablo inglés y español!"'},
                ],
                englishText: [
                    { text: '"I speak Enlgish and Spanish!"'},
                ],
            }
        }],
    },
    P_2: {
        dualComponents: [{
            coordinates: {
                preferredX: 904,
                preferredY: 236,
                alternateX: 904,
                alternateY: 385,
            },
            dualShape: {
                spanishShape: {
                    type: SupportedShape.RoundedRect,
                    style: {
                        width: 419,
                        height: 114,
                        radius: 16,
                        style: {
                            fillColor: 0xFFFFFF,
                            strokeColor: 0xFF9C1A,
                            strokeWeight: 4,
                            shadowOffset: 16,
                            shadowFill: 0xF9A336, 
                            shadowAlpha: 1,
                        }
                    }
                },
                englishShape: {
                    type: SupportedShape.RoundedRect,
                    style:{
                        width: 419,
                        height: 114,
                        radius: 16,
                        style: {
                            fillColor: 0xFFFFFF,
                            strokeColor: 0x4CDAFE,
                            strokeWeight: 4,
                            shadowOffset: 16,
                            shadowFill: 0x01B4ED, 
                            shadowAlpha: 1,
                    }
                    }
                }
            },
            dualText: {
                spanishText: [
                    { text: 'Mi familia es de Puerto Rico,\ndonde hace '},
                    { text: 'sol ', style: SPANISH_HIGHLIGHT},
                    { text: 'y '},
                    { text: 'calor', style: SPANISH_HIGHLIGHT},
                    { text: '.'},
                ],
                englishText: [
                    { text: 'My family is from Puerto Rico,\nwhere it is '},
                    { text: 'sunny ', style: ENGLISH_HIGHLIGHT},
                    { text: 'and '},
                    { text: 'hot', style: ENGLISH_HIGHLIGHT},
                    { text: '.'},
                ],
            }
        }],
    }

}
