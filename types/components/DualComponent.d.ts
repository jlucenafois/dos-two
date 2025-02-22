import { DualShape } from "../shape/DualShape"
import { DualCoordinates } from "./DualCoordinates";
export type DualComponent = {
    coordinates: DualCoordinates;
    dualShape?: DualShape;   
    dualText?: DualText;

}