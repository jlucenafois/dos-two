export type TextSegment = {
    text: string;
    style?: {
        fontFamily?: string; fontWeight?: string; fontSize?: string; fill?: string; strokeColor?: string; strokeWeight?: number; shadowOffsetX?: number;
        shadowOffsetY?: number;
        shadowColor?: string;
        shadowBlur?: number; // Optional style
    }
};