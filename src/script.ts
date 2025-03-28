import { SupportedShape } from "../types/shape/SupportedShape";
import { DualComponent } from "../types/components/DualComponent";
import { SingleComponent } from "../types/components/SingleComponent";

let SPANISH_HIGHLIGHT = {fill: '#B00012', } 
let ENGLISH_HIGHLIGHT = {fill: '#3738B4', } 
const CHAPTERS: Record<string, number> = {
    "CH_1": 4,
    "CH_2": 2,
}
export const SCRIPT: Record<string, { 
    dualComponents?: DualComponent[]
    singleComponents?: SingleComponent[] 
    prev_key: string | null, 
    next_key: string | null, 
    index?: number, 
    total?: number, // might be a better way
    // TODO: expand this to allow Single Components
}> = {
    OB_1: {
        prev_key: null,
        next_key: "OB_2",
    },
    OB_2: {
        prev_key: "OB_1",
        next_key: null,
    },
    OB_3_1: {
        prev_key: "OB_2",
        next_key: "OB_4",
    },
    OB_3_2: {
        prev_key: "OB_2",
        next_key: "OB_4",
    },
    OB_4: {
        prev_key: null,
        next_key: "P_1",
    },
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
        prev_key: null,
        next_key: "P_1",
        index: 0,
        total: CHAPTERS["CH_1"],
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
        prev_key: "P_0",
        next_key: "P_2",
        index: 1,
        total: CHAPTERS["CH_1"],
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
        prev_key: "P_1",
        next_key: "P_3",
        index: 2,
        total: CHAPTERS["CH_1"],
    },
    P_3: {
        prev_key: "P_2",
        next_key: "Q_1",
        index: 3,
        total: CHAPTERS["CH_1"],
    }, 
    Q_1: {
        // render propmt + blank + options (gotta mark correct vs. incorrect options)
        singleComponents: [
            {
                singleText: {
                    x: 497, 
                    y: 436,
                    content: [{
                        text: "In Puerto Rico, it is sunny and",
                        style: {
                            fontSize: "40px",
                            fontWeight: 850, 
                            fill: "#4F4F4F"
                        }
                    }]
                },
            },
            {
                singleShape: {
                    x: 1125,
                    y: 465,
                    type: SupportedShape.RoundedRect,
                    style: {
                        width: 155,
                        height: 40, 
                        radius: 8,
                        style: {
                            strokeColor: 0x87E7FF, 
                            strokeWeight: 6, 
                        }
                    }
                }

            },
            {
                singleText: {
                    x: 529, 
                    y: 570,
                    content: [{
                        text: "hot",
                        style: {
                            fontWeight: 850, 
                            fill: "#4F4F4F"
                        }
                    }]
                },
                singleShape: {
                    x: 497,
                    y: 570,
                    type: SupportedShape.RoundedRect,
                    style: {
                        width: 390,
                        height: 72, 
                        radius: 8,
                        style: {
                            strokeColor: 0x4B4B4B, 
                            strokeWeight: 6, 
                        }
                    }
                }
            }

        ],
        prev_key: "P_3",
        next_key: "P_4",
        index: 4,
        total: CHAPTERS["CH_1"],
    },   
    P_4: {
        prev_key: "Q_1",
        next_key: "P_5",
        index: 0,
        total: CHAPTERS["CH_2"],
    },   
    P_5: {
        prev_key: "P_4",
        next_key: "Q_2",
        index: 1,
        total: CHAPTERS["CH_2"],
    },   
    Q_2: {
        prev_key: "P_5",
        next_key: "P_6",
        index: 2,
        total: CHAPTERS["CH_2"],
    },   
}
