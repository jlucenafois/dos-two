import { SupportedShape } from "../types/shape/SupportedShape";
import { DualComponent } from "../types/components/DualComponent";
import { SingleComponent } from "../types/components/SingleComponent";
import { Language } from "./settings";
import P_10 from "./scenes/story/P_10";

type Section = {
    dualComponents?: DualComponent[],
    quizVariants?: {
        [Language.English]: SingleComponent[],
        [Language.Spanish]: SingleComponent[]
    },
    panDeltaX?: number
    // TODO: are indexes part of sections or pages?
    // index?: number,
    // total?: number, // might be a better way
    playedOnce?: boolean;
}
let SPANISH_HIGHLIGHT = {
    fill: '#B00012',
    fontWeight: '800',
    strokeColor: '#FFFFFF',        // White stroke
    strokeWeight: 6,             // 6px thickness
    shadowOffsetX: 1,
    shadowOffsetY: 1,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowBlur: 0
};

let ENGLISH_HIGHLIGHT = {
    fill: '#3738B4',
    fontWeight: '800',
    strokeColor: '#FFFFFF',        // White stroke
    strokeWeight: 6,             // 6px thickness
    shadowOffsetX: 1,
    shadowOffsetY: 1,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowBlur: 0
};

const CHAPTERS: Record<string, number> = {
    "CH_1": 4,
    "CH_2": 2,
    "CH_3": 8,
    "CH_4": 8,
    "CH_5": 6,
    "CH_6": 1,
    "CH_7": 1,
    "CH_8": 8,
}
export const SCRIPT: Record<string, { sections?: Section[]; prev_key: null | string; next_key: null | string; index?: number, total?: number, lastVisitedSectionIndex?: number }> = {
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
        sections: [{
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
                            { text: 'espejo', style: SPANISH_HIGHLIGHT },
                            { text: '.\n"Soy especial", dice.' }
                        ],
                        box: 'shape'
                    },
                    englishText: {
                        content: [
                            { text: 'Clarita looks in the ' },
                            { text: 'mirror', style: ENGLISH_HIGHLIGHT },
                            { text: '.\n"I am special," she says.' }
                        ],
                        box: 'shape'
                    }
                }
            }],
        }],
        index: 0,
        total: CHAPTERS["CH_1"],
        prev_key: "P_0",
        next_key: "P_2",
    },
    P_2: {
        sections: [{
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
                            { text: '¡Hablo ' },
                            { text: 'inglés', style: SPANISH_HIGHLIGHT },
                            { text: ' y ' },
                            { text: 'español', style: SPANISH_HIGHLIGHT },
                            { text: '!' }
                        ],
                        box: 'shape'
                    },
                    englishText: {
                        content: [
                            { text: 'I speak ' },
                            { text: 'English', style: ENGLISH_HIGHLIGHT },
                            { text: ' and ' },
                            { text: 'Spanish', style: ENGLISH_HIGHLIGHT },
                            { text: '!' }
                        ],
                        box: 'shape'
                    }
                }
            }],
        }],
        index: 1,
        total: CHAPTERS["CH_1"],
        prev_key: "P_1",
        next_key: "P_3",
    },
    P_3: {
        sections: [
            //     {
            //     panDeltaX: -1000,
            // }, 
            {
                playedOnce: false,
                panDeltaX: 1000,
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
                                { text: 'sol', style: SPANISH_HIGHLIGHT },
                                { text: ' y ' },
                                { text: 'calor', style: SPANISH_HIGHLIGHT },
                                { text: '.' }
                            ],
                            box: 'shape'
                        },
                        englishText: {
                            content: [
                                { text: 'My family is from Puerto Rico,\nwhere it is ' },
                                { text: 'sunny', style: ENGLISH_HIGHLIGHT },
                                { text: ' and ' },
                                { text: 'hot', style: ENGLISH_HIGHLIGHT },
                                { text: '.' }
                            ],
                            box: 'shape'
                        }
                    }
                }],
            }],
        index: 2,
        total: CHAPTERS["CH_1"],
        prev_key: "P_2",
        next_key: "P_4",
    },
    P_4: {
        sections: [{
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
                },
                dualText: {
                    spanishText: {
                        content: [
                            { text: 'Pero creci en Nueva York, donde\nhace mucho ' },
                            { text: 'frío', style: SPANISH_HIGHLIGHT },
                            { text: '.' }
                        ],
                        box: 'shape'
                    },
                    englishText: {
                        content: [
                            { text: 'But I grew up in New York,\nwhere it is very ' },
                            { text: 'cold', style: ENGLISH_HIGHLIGHT },
                            { text: '.' }
                        ],
                        box: 'shape'
                    }
                }

            }],
        }],
        index: 3,
        total: CHAPTERS["CH_1"],
        prev_key: "P_3",
        next_key: "Q_1",

    },
    Q_1: {
        sections: [{
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
                                fontWeight: '850',
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
                                fontWeight: '850',
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
                                fontWeight: '850',
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
                                fontWeight: '850',
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
                                fontWeight: '850',
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
                                fontWeight: '850',
                                fill: "#4F4F4F"
                            }
                        }],
                        box: "img"
                    },
                }],
            },
        }],
        index: 4,
        total: CHAPTERS["CH_1"],
        prev_key: "P_4",
        next_key: "P_5",
    },
    P_5: {
        sections: [
            {
                panDeltaX: -1000,
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
                    },
                    dualText: {
                        spanishText: {
                            content: [
                                { text: 'En la ' },
                                { text: 'escuela', style: SPANISH_HIGHLIGHT },
                                { text: ', hablo inglés.' }
                            ],
                            box: 'shape'
                        },
                        englishText: {
                            content: [
                                { text: 'At ' },
                                { text: 'school', style: ENGLISH_HIGHLIGHT },
                                { text: ', I speak English.' }
                            ],
                            box: 'shape'
                        }
                    }
                }],
            },
            {
                panDeltaX: 1000,
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
                    },
                    dualText: {
                        spanishText: {
                            content: [
                                { text: 'En ' },
                                { text: 'casa', style: SPANISH_HIGHLIGHT },
                                { text: ', escucho cuentos en\nespañol.' }
                            ],
                            box: 'shape'
                        },
                        englishText: {
                            content: [
                                { text: 'At ' },
                                { text: 'home', style: ENGLISH_HIGHLIGHT },
                                { text: ', I listen to stories in\nSpanish.' }
                            ],
                            box: 'shape'
                        }
                    }
                }],
            },
        ],
        index: 0,
        total: CHAPTERS["CH_3"],
        prev_key: "Q_1",
        next_key: "Q_2",
    },
    Q_2: {
        sections: [{
            playedOnce: false,
            quizVariants: {

                [Language.English]: [
                    {
                        singleText: {
                            x: 489,
                            y: 446,
                            content: [{
                                text: "Where does Clarita listen to stories in Spanish?",
                                style: {
                                    fontSize: "40px",
                                    fontWeight: '850',
                                    fill: "#4F4F4F"
                                }
                            }]
                        },
                    },
                    {
                        singleImage: {
                            x: 497,
                            y: 566,
                            default: "quiz_option_default",
                            hovered: "quiz_option_hovered",
                            pressed: "quiz_option_pressed",
                            feedback: "quiz_option_incorrect",
                        },
                        boundedText: {
                            content: [{
                                text: "School",
                                style: {
                                    fontWeight: '850',
                                    fill: "#4F4F4F"
                                }
                            }],
                            box: "img"
                        },
                    },
                    {
                        singleImage: {
                            x: 914,
                            y: 566,
                            default: "quiz_option_default",
                            hovered: "quiz_option_hovered",
                            pressed: "quiz_option_pressed",
                            feedback: "quiz_option_correct",
                        },
                        boundedText: {
                            content: [{
                                text: "Home",
                                style: {
                                    fontWeight: '850',
                                    fill: "#4F4F4F"
                                }
                            }],
                            box: "img"
                        },
                        isCorrect: true,
                    },
                ],
                [Language.Spanish]: [{
                    singleText: {
                        x: 489,
                        y: 446,
                        content: [{
                            text: "¿Dónde escucha Clarita cuentos en español?",
                            style: {
                                fontSize: "40px",
                                fontWeight: '850',
                                fill: "#4F4F4F"
                            }
                        }]
                    },
                },
                {
                    singleImage: {
                        x: 497,
                        y: 566,
                        default: "quiz_option_default",
                        hovered: "quiz_option_hovered",
                        pressed: "quiz_option_pressed",
                        feedback: "quiz_option_incorrect",
                    },
                    boundedText: {
                        content: [{
                            text: "Escuela",
                            style: {
                                fontWeight: '850',
                                fill: "#4F4F4F"
                            }
                        }],
                        box: "img"
                    },
                },
                {
                    singleImage: {
                        x: 914,
                        y: 566,
                        default: "quiz_option_default",
                        hovered: "quiz_option_hovered",
                        pressed: "quiz_option_pressed",
                        feedback: "quiz_option_correct",
                    },
                    boundedText: {
                        content: [{
                            text: "Casa",
                            style: {
                                fontWeight: '850',
                                fill: "#4F4F4F"
                            }
                        }],
                        box: "img"
                    },
                    isCorrect: true,
                }]
            },
        }],
        index: 2,
        total: CHAPTERS["CH_2"],
        prev_key: "P_5",
        next_key: "P_6",
    },
    P_6: {
        sections: [
            {

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
                    },
                    dualText: {
                        spanishText: {
                            content: [
                                { text: 'En ' },
                                { text: 'casa', style: SPANISH_HIGHLIGHT },
                                { text: ', escucho cuentos en\nespañol.' }
                            ],
                            box: 'shape'
                        },
                        englishText: {
                            content: [
                                { text: 'At ' },
                                { text: 'home', style: ENGLISH_HIGHLIGHT },
                                { text: ', I listen to stories in\nSpanish.' }
                            ],
                            box: 'shape'
                        }
                    }
                }],
            }],
        index: 0,
        total: CHAPTERS["CH_3"],
        prev_key: "Q_2",
        next_key: "P_7",
    },
    P_7: {
        sections: [
            {
                panDeltaX: -1000,
                dualComponents: [{
                    coordinates: {
                        preferredX: 848,
                        preferredY: 278,
                        alternateX: 1074,
                        alternateY: 817,
                    },
                    dualShape: {
                        spanishShape: {
                            type: SupportedShape.RoundedRect,
                            style: {
                                width: 256,
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
                                width: 256,
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
                                { text: 'horse is caballo' },
                            ],
                            box: 'shape'
                        },
                        englishText: {
                            content: [
                                { text: 'lento is slow' },
                            ],
                            box: 'shape'
                        }
                    }
                }],
            },
            {

                panDeltaX: 1000,
                dualComponents: [{
                    coordinates: {
                        preferredX: 1072,
                        preferredY: 796,
                        alternateX: 608,
                        alternateY: 230,
                    },
                    dualShape: {
                        spanishShape: {
                            type: SupportedShape.RoundedRect,
                            style: {
                                width: 239,
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
                                width: 239,
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
                                { text: 'dormir is sleep' },
                            ],
                            box: 'shape'
                        },
                        englishText: {
                            content: [
                                { text: 'tirar is throw' },
                            ],
                            box: 'shape'
                        }
                    }
                }],
            }
        ],
        index: 0,
        total: 1,
        prev_key: 'P_6',
        next_key: "P_8",
    },
    P_8: {
        sections: [{
            dualComponents: [],
        },
        ],
        index: 0,
        total: 1,
        prev_key: "P_7",
        next_key: "P_9",
    },
    P_9: {
        sections: [{

            dualComponents: [],
        }],
        index: 0,
        total: 1,
        prev_key: "P_8",
        next_key: "P_10",
    },
    P_10: {
        sections: [{
            panDeltaX: -1000,
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
                },
                dualText: {
                    spanishText: {
                        content: [
                            { text: 'Una ' },
                            { text: 'soñadora', style: SPANISH_HIGHLIGHT },
                            { text: ', seré\nhablando Inglés y Español,' }
                        ],
                        box: 'shape'
                    },
                    englishText: {
                        content: [
                            { text: 'A ' },
                            { text: 'dreamer', style: ENGLISH_HIGHLIGHT },
                            { text: ', I’ll be, speaking both\nEnglish and Spanish,' }
                        ],
                        box: 'shape'
                    }
                }
            }],
        },
        {
            panDeltaX: 1000,
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
                },
                dualText: {
                    spanishText: {
                        content: [
                            { text: 'Y compartiendo mi ' },
                            { text: 'corazón', style: SPANISH_HIGHLIGHT },
                            { text: '!' }
                        ],
                        box: 'shape'
                    },
                    englishText: {
                        content: [
                            { text: 'And sharing my ' },
                            { text: 'heart', style: ENGLISH_HIGHLIGHT },
                            { text: ' so free!' }
                        ],
                        box: 'shape'
                    }
                }
            }],
        }],
        index: 0,
        total: 1,
        prev_key: "P_9",
        next_key: "P_11",
    },
    P_11: {
        sections: [{
            panDeltaX: -1000,
            dualComponents: [{
                coordinates: {
                    preferredX: 917,
                    preferredY: 581,
                    alternateX: 917,
                    alternateY: 766,
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
                },
                dualText: {
                    spanishText: {
                        content: [
                            { text: 'Mi abuela habla español.\nHago mi mejor esfuerzo, aunque\nno sé todas las palabras.' },
                        ],
                        box: 'shape'
                    },
                    englishText: {
                        content: [
                            { text: 'My grandma speaks Spanish. I\ntry my best, even when I don’t\nknow every word.' },
                        ],
                        box: 'shape'
                    }
                }
            }],
        },
        {
            panDeltaX: 1000,
        }],
        index: 0,
        total: 1,
        prev_key: "P_10",
        next_key: "P_12",
    },
    P_12: {
        sections: [{
            panDeltaX: -1000,
            dualComponents: [{
                coordinates: {
                    preferredX: 917,
                    preferredY: 581,
                    alternateX: 917,
                    alternateY: 766,
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
                },
                dualText: {
                    spanishText: {
                        content: [
                            { text: 'Mi abuela habla español.\nHago mi mejor esfuerzo, aunque\nno sé todas las palabras.' },
                        ],
                        box: 'shape'
                    },
                    englishText: {
                        content: [
                            { text: 'My grandma speaks Spanish. I\ntry my best, even when I don’t\nknow every word.' },
                        ],
                        box: 'shape'
                    }
                }
            }],
        },
        {
            panDeltaX: 1000,
        }],
        index: 0,
        total: 1,
        prev_key: "P_11",
        next_key: "P_13",
    },
    P_13: {
        sections: [{
            panDeltaX: -1000,
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
                },
                dualText: {
                    spanishText: {
                        content: [
                            { text: 'Mi familia ' },
                            { text: 'canta', style: SPANISH_HIGHLIGHT },
                            { text: ' y ' },
                            { text: 'baila', style: SPANISH_HIGHLIGHT },
                            { text: '.' }
                        ],
                        box: 'shape'
                    },
                    englishText: {
                        content: [
                            { text: 'My family ' },
                            { text: 'sings', style: ENGLISH_HIGHLIGHT },
                            { text: ' and ' },
                            { text: 'dances', style: ENGLISH_HIGHLIGHT },
                            { text: '.' }
                        ],
                        box: 'shape'
                    }
                }
            }],
        },
        {
            panDeltaX: 1000,
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
                },
                dualText: {
                    spanishText: {
                        content: [
                            { text: '"¡Baila conmigo!\n¡Wepa!" dice mamá.' },
                        ],
                        box: 'shape'
                    },
                    englishText: {
                        content: [
                            { text: '"Dance with me!\nWepa!" says Mom.' },
                        ],
                        box: 'shape'
                    }
                }
            }],
        }],
        index: 0,
        total: 1,
        prev_key: "P_12",
        next_key: "P_14",
    },
    P_14: {
        sections: [{

            dualComponents: [],
        }],
        index: 0,
        total: 1,
        prev_key: "P_13",
        next_key: "P_15",
    },
    P_15: {
        sections: [{
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
                },
                dualText: {
                    spanishText: {
                        content: [
                            { text: 'Una ' },
                            { text: 'soñadora', style: SPANISH_HIGHLIGHT },
                            { text: ', seré\nhablando Inglés y Español,' }
                        ],
                        box: 'shape'
                    },
                    englishText: {
                        content: [
                            { text: 'A ' },
                            { text: 'dreamer', style: ENGLISH_HIGHLIGHT },
                            { text: ', I’ll be, speaking both\nEnglish and Spanish,' }
                        ],
                        box: 'shape'
                    }
                }
            }],
        }],
        index: 0,
        total: 1,
        prev_key: "P_14",
        next_key: "P_16",
    },
    P_16: {
        sections: [
            {

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
                    },
                    dualText: {
                        spanishText: {
                            content: [
                                { text: 'Y compartiendo mi ' },
                                { text: 'corazón', style: SPANISH_HIGHLIGHT },
                                { text: '!' }
                            ],
                            box: 'shape'
                        },
                        englishText: {
                            content: [
                                { text: 'And sharing my ' },
                                { text: 'heart', style: ENGLISH_HIGHLIGHT },
                                { text: ' so free!' }
                            ],
                            box: 'shape'
                        }
                    }
                }],
            }
        ],
        index: 0,
        total: 1,
        prev_key: "P_15",
        next_key: "P_17",
    },
    P_17: {
        sections: [{
            dualComponents: [],
        }],
        index: 0,
        total: 1,
        prev_key: "P_16",
        next_key: "P_18",
    },
    P_18: {
        sections: [{

            dualComponents: [],
        }],
        index: 0,
        total: 1,
        prev_key: "P_17",
        next_key: "P_19",
    },
    P_19: {
        sections: [{
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
        }],
        index: 0,
        total: 1,
        prev_key: "P_18",
        next_key: "P_20",
    },
    P_20: {
        sections: [{
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
        }],
        index: 0,
        total: 1,
        prev_key: "P_19",
        next_key: "P_21",
    },
    P_22: {
        sections: [{
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
                },
                dualText: {
                    spanishText: {
                        content: [
                            { text: '"¡Baila conmigo!\n¡Wepa!" dice mamá.' },
                        ],
                        box: 'shape'
                    },
                    englishText: {
                        content: [
                            { text: '"Dance with me!\nWepa!" says Mom.' },
                        ],
                        box: 'shape'
                    }
                }
            }],
        }],
        index: 0,
        total: 1,
        prev_key: "P_21",
        next_key: "Q_4",
    },
    Q_4: {
        // render propmt + blank + options (gotta mark correct vs. incorrect options)
        sections: [{
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
                                    fontWeight: '850',
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
                                    fontWeight: '850',
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
                                    fontWeight: '850',
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
                                    fontWeight: '850',
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
                                fontWeight: '850',
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
                                fontWeight: '850',
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
                                fontWeight: '850',
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
                                fontWeight: '850',
                                fill: "#4F4F4F"
                            }
                        }],
                        box: "img"
                    },
                    isCorrect: true
                }]
            },
        }],
        index: 2,
        total: CHAPTERS["CH_4"],
        prev_key: "P_22",
        next_key: "P_23",
    },
    P_23: {
        sections: [{
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
                },
                dualText: {
                    spanishText: {
                        content: [
                            { text: 'Abuela está cocinando con ' },
                            { text: 'zanahorias', style: SPANISH_HIGHLIGHT },
                            { text: ' y ' },
                            { text: 'papas', style: SPANISH_HIGHLIGHT },
                            { text: '. "Abuela," pregunto, "¿Dónde está la...?"' }
                        ],
                        box: 'shape'
                    },
                    englishText: {
                        content: [
                            { text: 'Grandma is cooking with ' },
                            { text: 'carrots', style: ENGLISH_HIGHLIGHT },
                            { text: ' and ' },
                            { text: 'potatoes', style: ENGLISH_HIGHLIGHT },
                            { text: '. "Grandma," I ask, "Where is the...?"' }
                        ],
                        box: 'shape'
                    }
                }
            }],
        }],
        index: 0,
        total: 1,
        prev_key: "P_22",
        next_key: "P_24",
    },
    P_24: {
        sections: [{
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
                },
                dualText: {
                    spanishText: {
                        content: [
                            { text: 'Abuela sonríe. "¿La ' },
                            { text: 'cuchara', style: SPANISH_HIGHLIGHT },
                            { text: '?"\n"¡Sí, la cuchara!" digo.' }
                        ],
                        box: 'shape'
                    },
                    englishText: {
                        content: [
                            { text: 'Grandma smiles. "The ' },
                            { text: 'spoon', style: ENGLISH_HIGHLIGHT },
                            { text: '?"\n"Yes, the spoon!" I say.' }
                        ],
                        box: 'shape'
                    }
                }
            }],
        }],
        index: 0,
        total: 1,
        prev_key: "P_23",
        next_key: "P_25",
    },
    P_25: {
        sections: [{

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
                },
                dualText: {
                    spanishText: {
                        content: [
                            { text: 'Mis amigos se ríen cuando mezclo inglés y español. “I have ' },
                            { text: 'hambre', style: SPANISH_HIGHLIGHT },
                            { text: ',” digo.' }
                        ],
                        box: 'shape'
                    },
                    englishText: {
                        content: [
                            { text: 'My friends laugh when I mix English and Spanish. “I have ' },
                            { text: 'hambre', style: ENGLISH_HIGHLIGHT },
                            { text: ',” I say.' }
                        ],
                        box: 'shape'
                    }
                }
            }],
        }],
        index: 0,
        total: 1,
        prev_key: "P_24",
        next_key: "P_26",
    },
    P_26: {
        sections: [{

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
                },
                dualText: {
                    spanishText: {
                        content: [
                            { text: '“¿Por qué hablas así?” preguntan. No siempre es fácil.\n\nPero me siento ' },
                            { text: 'orgullosa', style: SPANISH_HIGHLIGHT },
                            { text: ' de hablar dos idiomas.' }
                        ],
                        box: 'shape'
                    },
                    englishText: {
                        content: [
                            { text: '“Why do you talk like that?” they ask. It’s not always easy,\n\nbut I feel ' },
                            { text: 'proud', style: ENGLISH_HIGHLIGHT },
                            { text: ' to speak two languages.' }
                        ],
                        box: 'shape'
                    }
                }
            }],

        }],
        index: 0,
        total: 1,
        prev_key: "P_25",
        next_key: "P_27",
    },
}    