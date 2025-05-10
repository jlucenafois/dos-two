### **Letter to Matter.js Vertices Converter**  

This script extracts **capital letter (A-Z) shapes** from the **Raleway font** and converts them into **vertex arrays** for use with **Matter.js physics** in Phaser.  

#### **How to Run**  
1. **Install dependencies**:  
   ```sh
   npm install opentype.js fs 
   ```  
2. **Download Raleway font** ([Google Fonts](https://fonts.google.com/specimen/Raleway)) and place `Raleway-Regular.ttf` in the same folder.  
3. **Run the script**:  
   ```sh
   node convertToVertices.js
   ```  
4. **Output**: The generated `letterVertices.json` contains **x, y coordinate arrays** for each letter.  

Now you can use these vertices in Matter.js to create **collidable** letter shapes! 🚀