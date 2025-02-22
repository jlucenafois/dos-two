import { SupportedShape } from "../../types/shape/SupportedShape";
import { DualComponent } from "../../types/components/DualComponent";

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
                    data: {
                        width: 419,
                        height: 114,
                        radius: 16,
                        style: {
                            fillColor: 0xFFFFFF,
                            strokeColor: 0x4CDAFE,
                            strokeWeight: 4,
                            shadowOffset: 10,
                            shadowFill: 0x4CDAFE, 
                            shadowAlpha: 1,
                        }
                    }
                },
                englishShape: {
                    type: SupportedShape.RoundedRect,
                    data:{
                        width: 419,
                        height: 114,
                        radius: 16,
                        style: {
                            fillColor: 0xFFFFFF,
                            strokeColor: 0xFF9C1A,
                            strokeWeight: 4,
                            shadowOffset: 10,
                            shadowFill: 0xFF9C1A, 
                            shadowAlpha: 1,
                    }
                    }
                }
            },
            dualText: {
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
            }
        }],
    }
}
    // P_1: {
    //     dualTexts: [{
    //         preferredX: 499.5,
    //         preferredY: 275,
    //         alternateX: 499.5,
    //         alternateY: 640,
    //         spanishText: [
    //             { text: 'Porque...\nA veces hablo en inglés\ny otras veces en español.', style: { fontFamily: 'Raleway', fontWeight: 550, fontSize: '24px', fill: '#A3A3A3' } },
    //             ],
    //         englishText: [
    //             { text: 'Because...\nSometimes I speak in English,\nand other times in Spanish', style: { fontFamily: 'Raleway', fontWeight: 550, fontSize: '24px', fill: '#A3A3A3' } },
    //         ],
    //     }],
    // },
// };
