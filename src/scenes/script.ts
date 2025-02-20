
export type TextSegment = {
    text: string;
    style?: { fontFamily?: string; fontWeight?: number; fontSize?: string; fill?: string }; // Optional style
};

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
                { text: "Clarita se miró en el ", style: { fontFamily: "Raleway", fontWeight: 600, fontSize: "24px", fill: "#A3A3A3" } },
                { text: "espejo", style: { fontFamily: "Raleway", fontWeight: 800, fontSize: "24px", fill: "#ff0000" } }, // Highlighted word
                { text: "\ny dijo, ¡Yo soy muy especial!", style: { fontFamily: "Raleway", fontWeight: 600, fontSize: "24px", fill: "#A3A3A3" } },
            ],
        englishText: [
            { text: "Clarita looked in the ", style: { fontFamily: "Raleway", fontWeight: 600, fontSize: "24px", fill: "#A3A3A3" } },
            { text: "mirror", style: { fontFamily: "Raleway", fontWeight: 800, fontSize: "24px", fill: "#ff0000" } }, // Highlighted word
            { text: "\nand she said, I am very special!", style: { fontFamily: "Raleway", fontWeight: 600, fontSize: "24px", fill: "#A3A3A3" } },
        ],
        preferredX: 950,
        preferredY: 400,
        alternateX: 950,
        alternateY: 600,
    },
    P_1: {
        spanishText: [
                { text: "Porque...\nA veces hablo en inglés\ny otras veces en español.", style: { fontFamily: "Raleway", fontWeight: 600, fontSize: "24px", fill: "#A3A3A3" } },
            ],
        englishText: [
            { text: "Because...\nSometimes I speak in English,\nand other times in Spanish", style: { fontFamily: "Raleway", fontWeight: 600, fontSize: "24px", fill: "#A3A3A3" } },
        ],
        preferredX: 199,
        preferredY: 304,
        alternateX: 199,
        alternateY: 769,
    },
};
