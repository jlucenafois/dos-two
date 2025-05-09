import { DualShape } from "../shape/DualShape"
import { DualCoordinates } from "./DualCoordinates";
import { DualText } from "../text/DualText";
export type DualComponent = {
    coordinates: DualCoordinates;
    dualShape?: DualShape;   
    dualText?: DualText;

}