export type ShapeData = {
    x:number,
    y: number,
    width: number,
    height: number, 
    radius?: number,
    style: {
        fillColor?: number, 
        fillAlpha?: number, 
        strokeColor?: number, 
        strokeWeight?: number, 
        shadowOffset?: number, 
        shadowFill?: number, 
        shadowAlpha?: number,
    }, 
}