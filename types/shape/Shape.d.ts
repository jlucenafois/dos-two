import { ShapeStyle } from "./ShapeStyle";
import { SupportedShape } from "./SupportedShape"

export type Shape = {
    x: number;
    y: number;
    type: SupportedShape; 
    style: ShapeStyle;
}