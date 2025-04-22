import { SupportedShape } from "../types/shape/SupportedShape";
import { DualComponent } from "../types/components/DualComponent";
import { SingleComponent } from "../types/components/SingleComponent";
import { Language } from "./settings";

let SPANISH_HIGHLIGHT = { fill: '#B00012', }
let ENGLISH_HIGHLIGHT = { fill: '#3738B4', }
const CHAPTERS: Record<string, number> = {
    "CH_1": 4,
    "CH_2": 2,
    "CH_3": 7,
}
export const SCRIPT: Record<string, {
    dualComponents?: DualComponent[],
    quizVariants?: {
        [Language.English]: SingleComponent[],
        [Language.Spanish]: SingleComponent[]
    },
    prev_key: string | null,
    next_key: string | null,
    index?: number,
    total?: number, // might be a better way
    playedOnce?: boolean;
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
        next_key: "P_0",
    },
    P_0: {
        prev_key: null,
        next_key: "P_1"
    },
    P_1: {
        playedOnce: false,
        dualComponents: [{
            coordinates: {
                preferredX: 953,
                preferredY: 439,
                alternateX: 953,
                alternateY: 589,
            },
            dualShape: {
                spanishShape: {
                    type: SupportedShape.RoundedRect,
                    style: {
                        width: 377,
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
                    style: {
                        width: 377,
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
                spanishText: {
                    content: [
                        { text: 'Clarita se mira en el ' },
                        { text: 'espejo', style: SPANISH_HIGHLIGHT }, // Highlighted word
                        { text: '\n"Soy especial," dice.' },
                    ],
                    box: 'shape'
                },
                englishText: {
                    content: [
                        { text: 'Clarita looks in the ' },
                        { text: 'mirror', style: ENGLISH_HIGHLIGHT }, // Highlighted word
                        { text: '\n"I am special," she says.' },
                    ],
                    box: 'shape'
                }
            }
        }],
        prev_key: "P_0",
        next_key: "P_2",
        index: 0,
        total: CHAPTERS["CH_1"],
    },
    P_2: {
        playedOnce: false,
        dualComponents: [{
            coordinates: {
                preferredX: 524,
                preferredY: 314,
                alternateX: 514,
                alternateY: 683,
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
                    style: {
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
                spanishText: {
                    content: [
                        { text: '"¡Hablo inglés y español!"' },
                    ],
                    box: 'shape'
                },
                englishText: {
                    content: [
                        { text: '"I speak Enlgish and Spanish!"' },
                    ],
                    box: 'shape'
                }
            }
        }],
        prev_key: "P_1",
        next_key: "P_3",
        index: 1,
        total: CHAPTERS["CH_1"],
    },
    P_3: {
        playedOnce: false,
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
                    style: {
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
                spanishText: {
                    content: [
                        { text: 'Mi familia es de Puerto Rico,\ndonde hace ' },
                        { text: 'sol ', style: SPANISH_HIGHLIGHT },
                        { text: 'y ' },
                        { text: 'calor', style: SPANISH_HIGHLIGHT },
                        { text: '.' },
                    ],
                    box: 'shape'
                },
                englishText: {
                    content: [
                        { text: 'My family is from Puerto Rico,\nwhere it is ' },
                        { text: 'sunny ', style: ENGLISH_HIGHLIGHT },
                        { text: 'and ' },
                        { text: 'hot', style: ENGLISH_HIGHLIGHT },
                        { text: '.' },
                    ],
                    box: 'shape'
                }
            }
        }],
        prev_key: "P_2",
        next_key: "P_4",
        index: 2,
        total: CHAPTERS["CH_1"],
    },
    P_4: {
        dualComponents: [{
            coordinates: {
                preferredX: 928,
                preferredY: 217,
                alternateX: 928,
                alternateY: 363,
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
                    style: {
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
            }
        }],
        prev_key: "P_3",
        next_key: "Q_1",
        index: 3,
        total: CHAPTERS["CH_1"],
    },
    Q_1: {
        playedOnce: false,
        quizVariants: {
            [Language.English]: [{
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
                singleImage: {
                    x: 1125,
                    y: 465,
                    default: "quiz_english_blank",
                    origin: [0.5, 0.5]
                }
            },
            {
                singleImage: {
                    x: 497,
                    y: 570,
                    default: "quiz_option_default",
                    hovered: "quiz_option_hovered",
                    pressed: "quiz_option_pressed",
                    feedback: "quiz_option_correct"
                },
                boundedText: {
                    content: [{
                        text: "hot",
                        style: {
                            fontWeight: 850,
                            fill: "#4F4F4F"
                        }
                    }],
                    box: "img"
                },
                isCorrect: true
            },
            {
                singleImage: {
                    x: 914,
                    y: 570,
                    default: "quiz_option_default",
                    hovered: "quiz_option_hovered",
                    pressed: "quiz_option_pressed",
                    feedback: "quiz_option_incorrect"
                },
                boundedText: {
                    content: [{
                        text: "cold",
                        style: {
                            fontWeight: 850,
                            fill: "#4F4F4F"
                        }
                    }],
                    box: "img"
                },
            }],
            [Language.Spanish]: [{
                singleText: {
                    x: 497,
                    y: 436,
                    content: [{
                        text: "En Puerto Rico, hace sol y",
                        style: {
                            fontSize: "40px",
                            fontWeight: 850,
                            fill: "#4F4F4F"
                        }
                    }]
                },
            },
            {
                singleImage: {
                    x: 1125,
                    y: 465,
                    default: "quiz_spanish_blank",
                    origin: [0.5, 0.5]
                }
            },
            {
                singleImage: {
                    x: 497,
                    y: 570,
                    default: "quiz_option_default",
                    hovered: "quiz_option_hovered",
                    pressed: "quiz_option_pressed",
                    feedback: "quiz_option_correct"
                },
                boundedText: {
                    content: [{
                        text: "calor",
                        style: {
                            fontWeight: 850,
                            fill: "#4F4F4F"
                        }
                    }],
                    box: "img"
                },
                isCorrect: true
            },
            {
                singleImage: {
                    x: 914,
                    y: 570,
                    default: "quiz_option_default",
                    hovered: "quiz_option_hovered",
                    pressed: "quiz_option_pressed",
                    feedback: "quiz_option_incorrect"
                },
                boundedText: {
                    content: [{
                        text: "frío",
                        style: {
                            fontWeight: 850,
                            fill: "#4F4F4F"
                        }
                    }],
                    box: "img"
                },
            }],
        },
        prev_key: "P_4",
        next_key: "P_5",
        index: 4,
        total: CHAPTERS["CH_1"],
    },
    P_5: {
        prev_key: "Q_1",
        next_key: "P_6",
        index: 0,
        total: CHAPTERS["CH_2"],
    },
    P_6: {
        dualComponents: [{
            coordinates: {
                preferredX: 928,
                preferredY: 235,
                alternateX: 928,
                alternateY: 381,
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
                    style: {
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
            }
        }],
        prev_key: "P_5",
        next_key: "Q_2",
        index: 1,
        total: CHAPTERS["CH_2"],
    },
    Q_2: {
        // render propmt + blank + options (gotta mark correct vs. incorrect options)
        playedOnce: false,
        quizVariants: {

            [Language.English]: [
                {
                    singleText: {
                        x: 575,
                        y: 385,
                        content: [{
                            text: "¿Qué está cocinando la abuela?",
                            style: {
                                fontSize: "40px",
                                fontWeight: 850,
                                fill: "#4F4F4F"
                            }
                        }]
                    },
                },
                {
                    singleImage: {
                        x: 647,
                        y: 487,
                        default: "quiz_option_default",
                        hovered: "quiz_option_hovered",
                        pressed: "quiz_option_pressed",
                        feedback: "quiz_option_incorrect",
                    },
                    boundedText: {
                        content: [{
                            text: "zanahorias",
                            style: {
                                fontWeight: 850,
                                fill: "#4F4F4F"
                            }
                        }],
                        box: "img"
                    },
                },
                {
                    singleImage: {
                        x: 647.5,
                        y: 591,
                        default: "quiz_option_default",
                        hovered: "quiz_option_hovered",
                        pressed: "quiz_option_pressed",
                        feedback: "quiz_option_incorrect",
                    },
                    boundedText: {
                        content: [{
                            text: "papas",
                            style: {
                                fontWeight: 850,
                                fill: "#4F4F4F"
                            }
                        }],
                        box: "img"
                    },
                },
                {
                    singleImage: {
                        x: 647.5,
                        y: 695,
                        default: "quiz_option_default",
                        hovered: "quiz_option_hovered",
                        pressed: "quiz_option_pressed",
                        feedback: "quiz_option_correct",
                    },
                    boundedText: {
                        content: [{
                            text: "ambas",
                            style: {
                                fontWeight: 850,
                                fill: "#4F4F4F"
                            }
                        }],
                        box: "img"
                    },
                    isCorrect: true
                }
            ],
            [Language.Spanish]: [{
                singleText: {
                    x: 575,
                    y: 385,
                    content: [{
                        text: "¿Qué está cocinando la abuela?",
                        style: {
                            fontSize: "40px",
                            fontWeight: 850,
                            fill: "#4F4F4F"
                        }
                    }]
                },
            },
            {
                singleImage: {
                    x: 647,
                    y: 487,
                    default: "quiz_option_default",
                    hovered: "quiz_option_hovered",
                    pressed: "quiz_option_pressed",
                    feedback: "quiz_option_incorrect",
                },
                boundedText: {
                    content: [{
                        text: "zanahorias",
                        style: {
                            fontWeight: 850,
                            fill: "#4F4F4F"
                        }
                    }],
                    box: "img"
                },
            },
            {
                singleImage: {
                    x: 647.5,
                    y: 591,
                    default: "quiz_option_default",
                    hovered: "quiz_option_hovered",
                    pressed: "quiz_option_pressed",
                    feedback: "quiz_option_incorrect",
                },
                boundedText: {
                    content: [{
                        text: "papas",
                        style: {
                            fontWeight: 850,
                            fill: "#4F4F4F"
                        }
                    }],
                    box: "img"
                },
            },
            {
                singleImage: {
                    x: 647.5,
                    y: 695,
                    default: "quiz_option_default",
                    hovered: "quiz_option_hovered",
                    pressed: "quiz_option_pressed",
                    feedback: "quiz_option_correct",
                },
                boundedText: {
                    content: [{
                        text: "ambas",
                        style: {
                            fontWeight: 850,
                            fill: "#4F4F4F"
                        }
                    }],
                    box: "img"
                },
                isCorrect: true
            }]
        },
        prev_key: "P_6",
        next_key: "P_7",
        index: 2,
        total: CHAPTERS["CH_2"],
    },
    P_7: {
        dualComponents: [{
            coordinates: {
                preferredX: 448,
                preferredY: 232,
                alternateX: 902,
                alternateY: 232,
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
                    style: {
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
            }
        }],
        prev_key: "Q_2",
        next_key: "P_8",
        index: 0,
        total: CHAPTERS["CH_3"],
    },
    P_8: {
        dualComponents: [{
            coordinates: {
                preferredX: 437,
                preferredY: 801,
                alternateX: 914,
                alternateY: 801,
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
                    style: {
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
            }
        }],
        prev_key: "Q_2",
        next_key: "P_9",
        index: 0,
        total: CHAPTERS["CH_3"],
    },
    P_9: {
        dualComponents: [{
            coordinates: {
                preferredX: 936,
                preferredY: 412,
                alternateX: 936,
                alternateY: 592,
            },
            dualShape: {
                spanishShape: {
                    type: SupportedShape.RoundedRect,
                    style: {
                        width: 419,
                        height: 147,
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
                    style: {
                        width: 419,
                        height: 147,
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
            }
        }],
        prev_key: null,
        next_key: "P_10",
        index: 0,
        total: 1
    },
    P_10: {
        dualComponents: [],
        prev_key: "P_9",
        next_key: "P_11",
        index: 0,
        total: 1
    },
    P_11: {
        dualComponents: [],
        prev_key: "P_10",
        next_key: "P_12",
        index: 0,
        total: 1
    },
    P_12: {
        dualComponents: [],
        prev_key: "P_11",
        next_key: "P_13",
        index: 0,
        total: 1
    },
    P_13: {
        dualComponents: [],
        prev_key: "P_12",
        next_key: "P_14",
        index: 0,
        total: 1
    },
    P_14: {
        dualComponents: [],
        prev_key: "P_13",
        next_key: "P_15",
        index: 0,
        total: 1
    },
    P_15: {
        dualComponents: [{
            coordinates: {
                preferredX: 456,
                preferredY: 216,
                alternateX: 920,
                alternateY: 216,
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
                    style: {
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
            }
        }],
        prev_key: "P_14",
        next_key: "P_16",
        index: 0,
        total: 1
    },
    P_16: {
        dualComponents: [{
            coordinates: {
                preferredX: 449,
                preferredY: 815,
                alternateX: 918,
                alternateY: 815,
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
                    style: {
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
            }
        }],
        prev_key: "P_15",
        next_key: "P_17",
        index: 0,
        total: 1
    },
    P_17: {
        dualComponents: [],
        prev_key: "P_16",
        next_key: "P_18",
        index: 0,
        total: 1
    },
    P_18: {
        dualComponents: [],
        prev_key: "P_17",
        next_key: "P_19",
        index: 0,
        total: 1
    },
    P_19: {
        dualComponents: [{
            coordinates: {
                preferredX: 851,
                preferredY: 229,
                alternateX: 875,
                alternateY: 349,
            },
            dualShape: {
                spanishShape: {
                    type: SupportedShape.RoundedRect,
                    style: {
                        width: 458,
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
                    style: {
                        width: 458,
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
            }
        }],
        prev_key: "P_18",
        next_key: "P_20",
        index: 0,
        total: 1
    },
    P_20: {
        dualComponents: [{
            coordinates: {
                preferredX: 441,
                preferredY: 226,
                alternateX: 461,
                alternateY: 333,
            },
            dualShape: {
                spanishShape: {
                    type: SupportedShape.RoundedRect,
                    style: {
                        width: 458,
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
                    style: {
                        width: 458,
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
            }
        }],
        prev_key: "P_19",
        next_key: "P_21",
        index: 0,
        total: 1
    },
    P_21: {
        dualComponents: [{
            coordinates: {
                preferredX: 466,
                preferredY: 710,
                alternateX: 466,
                alternateY: 828,
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
                    style: {
                        width: 458,
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
            }
        }],
        prev_key: "P_20",
        next_key: "P_22",
        index: 0,
        total: 1
    },
    P_22: {
        dualComponents: [{
            coordinates: {
                preferredX: 566,
                preferredY: 229,
                alternateX: 899,
                alternateY: 229,
            },
            dualShape: {
                spanishShape: {
                    type: SupportedShape.RoundedRect,
                    style: {
                        width: 306,
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
                    style: {
                        width: 306,
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
            }
        }],
        prev_key: "P_21",
        next_key: "P_23",
        index: 0,
        total: 1
    },
    P_23: {
        dualComponents: [{
            coordinates: {
                preferredX: 449,
                preferredY: 238,
                alternateX: 913,
                alternateY: 238,
            },
            dualShape: {
                spanishShape: {
                    type: SupportedShape.RoundedRect,
                    style: {
                        width: 419,
                        height: 147,
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
                    style: {
                        width: 419,
                        height: 147,
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
            }
        }],
        prev_key: "P_22",
        next_key: "P_24",
        index: 0,
        total: 1
    },
    P_24: {
        dualComponents: [{
            coordinates: {
                preferredX: 461,
                preferredY: 231,
                alternateX: 922,
                alternateY: 231,
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
                    style: {
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
            }
        }],
        prev_key: "P_23",
        next_key: "P_25",
        index: 0,
        total: 1
    },
    P_25: {
        dualComponents: [{
            coordinates: {
                preferredX: 443, 
                preferredY: 225, 
                alternateX: 910,
                alternateY: 225,
            }, 
            dualShape: {
                spanishShape: {
                    type: SupportedShape.RoundedRect,
                    style: {
                        width: 419,
                        height: 147,
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
                    style: {
                        width: 419,
                        height: 147,
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
            }

        }],
        prev_key: "P_24",
        next_key: "P_26",
        index: 0,
        total: 1
    },
    P_26: {
        dualComponents: [{
            coordinates: {
                preferredX: 443,
                preferredY: 223,
                alternateX: 913,
                alternateY: 223,
            },
            dualShape: {
                spanishShape: {
                    type: SupportedShape.RoundedRect,
                    style: {
                        width: 419,
                        height: 180,
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
                    style: {
                        width: 419,
                        height: 180,
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
            }
        }],
        prev_key: "P_25",
        next_key: "P_27",
        index: 0,
        total: 1
    },
    P_27: {
        dualComponents: [],
        prev_key: "P_26",
        next_key: "P_28",
        index: 0,
        total: 1
    },
    P_28: {
        dualComponents: [],
        prev_key: "P_27",
        next_key: "P_29",
        index: 0,
        total: 1
    },
    P_29: {
        dualComponents: [],
        prev_key: "P_28",
        next_key: "P_30",
        index: 0,
        total: 1
    },
    P_30: {
        dualComponents: [],
        prev_key: "P_29",
        next_key: "P_31",
        index: 0,
        total: 1
    },
    P_31: {
        dualComponents: [],
        prev_key: "P_30",
        next_key: "P_32",
        index: 0,
        total: 1
    },
    P_32: {
        dualComponents: [],
        prev_key: "P_31",
        next_key: null,
        index: 0,
        total: 1
    }    
}    