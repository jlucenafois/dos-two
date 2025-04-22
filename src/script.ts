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
        prev_key: "Q_2",
        next_key: "P_8",
        index: 0,
        total: CHAPTERS["CH_3"],
    },
}
