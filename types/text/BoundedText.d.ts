import { TextSegment } from "./TextSegment"
export type BoundedText = {
        content: TextSegment[]
        box: "img" | "shape"
    }; 