import fs from "fs";
import opentype from "opentype.js";

async function generateLetterVertices(fontPath, outputFile, sampleRate = 10) {
    const font = await opentype.load(fontPath);
    const letterVertices = {};
    const fontSize = 100;
    const x = 0, y = 100; // Baseline

    for (let i = 65; i <= 90; i++) { // A-Z
        const letter = String.fromCharCode(i);
        const path = font.getPath(letter, x, y, fontSize);
        
        // Process path with contours
        let contours = [];
        let currentContour = [];
        let startX = 0, startY = 0;
        let currentX = 0, currentY = 0;

        path.commands.forEach(cmd => {
            switch(cmd.type) {
                case 'M': // moveTo - start a new contour
                    if (currentContour.length > 0) {
                        contours.push(currentContour);
                    }
                    currentContour = [];
                    currentX = startX = cmd.x;
                    currentY = startY = cmd.y;
                    currentContour.push({ x: currentX, y: currentY });
                    break;
                    
                case 'L': // lineTo - straight line
                    currentX = cmd.x;
                    currentY = cmd.y;
                    currentContour.push({ x: currentX, y: currentY });
                    break;
                    
                case 'C': // bezierCurveTo - cubic curve
                    // Sample the Bezier curve
                    const points = sampleCubicBezier(
                        currentX, currentY,
                        cmd.x1, cmd.y1,
                        cmd.x2, cmd.y2,
                        cmd.x, cmd.y,
                        sampleRate
                    );
                    
                    // Add sampled points (skip the first as it's the same as current position)
                    for (let i = 1; i < points.length; i++) {
                        currentContour.push(points[i]);
                    }
                    
                    currentX = cmd.x;
                    currentY = cmd.y;
                    break;
                    
                case 'Q': // quadraticCurveTo - quadratic curve
                    // Sample the quadratic Bezier curve
                    const qPoints = sampleQuadraticBezier(
                        currentX, currentY,
                        cmd.x1, cmd.y1,
                        cmd.x, cmd.y,
                        sampleRate
                    );
                    
                    // Add sampled points (skip the first as it's the same as current position)
                    for (let i = 1; i < qPoints.length; i++) {
                        currentContour.push(qPoints[i]);
                    }
                    
                    currentX = cmd.x;
                    currentY = cmd.y;
                    break;
                    
                case 'Z': // closePath
                    if (currentX !== startX || currentY !== startY) {
                        currentContour.push({ x: startX, y: startY });
                    }
                    
                    contours.push(currentContour);
                    currentContour = [];
                    break;
            }
        });
        
        // Add any remaining contour
        if (currentContour.length > 0) {
            contours.push(currentContour);
        }
        
        letterVertices[letter] = contours;
    }

    fs.writeFileSync(outputFile, JSON.stringify(letterVertices, null, 2));
    console.log(`Converted vertices saved to ${outputFile}`);
}

// Cubic Bezier curve sampling
function sampleCubicBezier(x0, y0, x1, y1, x2, y2, x3, y3, samples) {
    const points = [];
    for (let i = 0; i <= samples; i++) {
        const t = i / samples;
        const u = 1 - t;
        const tt = t * t;
        const uu = u * u;
        const uuu = uu * u;
        const ttt = tt * t;
        
        // Cubic Bezier formula
        const x = uuu * x0 + 3 * uu * t * x1 + 3 * u * tt * x2 + ttt * x3;
        const y = uuu * y0 + 3 * uu * t * y1 + 3 * u * tt * y2 + ttt * y3;
        
        points.push({ x, y });
    }
    return points;
}

// Quadratic Bezier curve sampling
function sampleQuadraticBezier(x0, y0, x1, y1, x2, y2, samples) {
    const points = [];
    for (let i = 0; i <= samples; i++) {
        const t = i / samples;
        const u = 1 - t;
        const tt = t * t;
        const uu = u * u;
        
        // Quadratic Bezier formula
        const x = uu * x0 + 2 * u * t * x1 + tt * x2;
        const y = uu * y0 + 2 * u * t * y1 + tt * y2;
        
        points.push({ x, y });
    }
    return points;
}

// Run the conversion
const fontPath = "Raleway-Bold.ttf";
generateLetterVertices(fontPath, "letterVertices.json");
