import { TextSegment } from "../../types/TextSegment";

export const SCRIPT: Record<string, {
    spanishText: TextSegment[];
    englishText: TextSegment[];
    preferredX: number;
    preferredY: number;
    alternateX: number;
    alternateY: number;
}> = {
    P_0: {
        spanishText: [
                { text: 'Clarita se miró en el ', style: { fontFamily: 'Raleway', fontWeight: 550, fontSize: '24px', fill: '#A3A3A3' } },
                { text: 'espejo', style: { fontFamily: 'Raleway', fontWeight: 800, fontSize: '24px', fill: '#B00012' } }, // Highlighted word
                { text: '\ny dijo, ¡Yo soy muy especial!', style: { fontFamily: 'Raleway', fontWeight: 550, fontSize: '24px', fill: '#A3A3A3' } },
            ],
        englishText: [
            { text: 'Clarita looked in the ', style: { fontFamily: 'Raleway', fontWeight: 550, fontSize: '24px', fill: '#A3A3A3' } },
            { text: 'mirror', style: { fontFamily: 'Raleway', fontWeight: 800, fontSize: '24px', fill: '#3738B4' } }, // Highlighted word
            { text: '\nand she said, "I am very special!"', style: { fontFamily: 'Raleway', fontWeight: 550, fontSize: '24px', fill: '#A3A3A3' } },
        ],
        preferredX: 928.5,
        preferredY: 445,
        alternateX: 928.5,
        alternateY: 595,
    },
    P_1: {
        spanishText: [
            { text: 'Porque...\nA veces hablo en inglés\ny otras veces en español.', style: { fontFamily: 'Raleway', fontWeight: 550, fontSize: '24px', fill: '#A3A3A3' } },
            ],
        englishText: [
            { text: 'Because...\nSometimes I speak in English,\nand other times in Spanish', style: { fontFamily: 'Raleway', fontWeight: 550, fontSize: '24px', fill: '#A3A3A3' } },
        ],
        preferredX: 499.5,
        preferredY: 275,
        alternateX: 499.5,
        alternateY: 640,
    },
};
