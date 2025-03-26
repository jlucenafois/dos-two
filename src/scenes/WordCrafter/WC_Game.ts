export default class WC_Game extends Phaser.Scene {
	private theme: string = "Mirror";

	constructor() {
		super("WC_Game");
	}

	init({ theme }: { theme: string }): void {
		this.theme = theme;
	}

    preload() {
        this.load.json("letterVertices", "assets/WordCrafter/letterVertices.json");
        this.load.json("letters", "assets/WordCrafter/letters.json");
    }

	editorCreate(): void {
		this.events.emit("scene-awake");
	}

	create(): void {
		this.editorCreate();
		this.events.emit("updateUI", "show_exit_button");
		this.events.emit("updateUI", "change_background", "#ffffff");

		const letters = this.cache.json.get("letters");
		
		// Parameters for letter positioning
		const startX = 100;
		const startY = 200;
		const letterSpacing = 80; // Horizontal spacing between letters
		const rowSpacing = 150;   // Vertical spacing between rows (if needed)
		const lettersPerRow = 13; // Split into two rows for better visibility
		// Create all 26 letters (A-Z)
		for (let i = 65; i <= 90; i++) {
			const letter = String.fromCharCode(i);
			
			// Skip if we don't have data for this letter
			if (!letters[letter]) continue;
            console.log(letter);
			
			// Calculate position - arranging in rows
			const row = Math.floor((i - 65) / lettersPerRow);
			const col = (i - 65) % lettersPerRow;
			const x = startX + (col * letterSpacing);
			const y = startY + (row * rowSpacing);
			
			// Create letter physics body
			const pathString = letters[letter];
			const pathElement = this.createSVGPathElement(pathString);
            console.log(pathElement);
			const vertices = this.matter.svg.pathToVertices(pathElement, 10);
			console.log(vertices);
			const body = this.matter.add.fromVertices(x, y, [vertices], {
				restitution: 0.8,
				friction: 0.1,
				isStatic: false // Make them move with physics
			}, true);
			
			// Optional: Add text label for easier identification
			this.add.text(x, y - 50, letter, { 
				font: '16px Arial', 
				color: '#000000' 
			}).setOrigin(0.5);
			
			// Draw debug outline
			// this.drawDebugShape(body);
		}
	}

	// Draws a debug shape so the body is visible
	drawDebugShape(body) {
		const graphics = this.add.graphics();
		graphics.lineStyle(2, 0xff0000); // Red outline

		const vertices = body.parts[0].vertices;
		graphics.beginPath();
		graphics.moveTo(vertices[0].x, vertices[0].y);
		for (let i = 1; i < vertices.length; i++) {
			graphics.lineTo(vertices[i].x, vertices[i].y);
		}
		graphics.closePath();
		graphics.strokePath();
	}

    createSVGPathElement(pathData) {
        // Create a complete SVG string with proper namespace
        const svgString = `
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
                ${pathData}
            </svg>
        `;
        
        // Parse the SVG string to an actual DOM element
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
        
        // Return the path element from the parsed SVG
        return svgDoc.querySelector("path");
    }
}
