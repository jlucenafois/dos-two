import { ShapeData } from "./ShapeData";
import { SupportedShape } from "./SupportedShape"

export type Shape = {
    type: SupportedShape; 
    data: ShapeData;
}