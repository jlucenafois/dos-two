import { ShapeStyle } from "./ShapeStyle";
import { SupportedShape } from "./SupportedShape"

export type PartialShape = {
    type: SupportedShape;
    style: ShapeStyle;
}