import { Shape } from "../shape/Shape"
import { SingleText } from "../text/SingleText";
import { BoundedText } from "../text/BoundedText";
import { Image } from "../image/Image";
export type SingleComponent = {
    singleShape?: Shape;   
    singleText?: SingleText;
    boundedText?: BoundedText;
    singleImage?: Image;
    isCorrect?: boolean;
}