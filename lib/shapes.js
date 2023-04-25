// main shape class constructor with primary common details
class Shape {
    // constructor(bkColor, color, ltrs, ltrColor) {
    constructor(color) {
        // this.bkColor = bkColor;
        this.color = color;
        // this.ltrs = ltrs;
        // this.ltrColor = ltrColor;
    }
};

// triangle specific features, equilaterally would be cool to figure out the others
class Triangle extends Shape {
    sketchTri = (color) => {
        return `<polygon points="150, 18 244, 182 56, 182" fill= "${color}" />`
    }
};

// square specific features, using rect because al squares are rectangles but not all rectangles are squares
class Square extends Shape {
    sketchSq = (color) => {
        return `<rect width="160" height="160" fill="${color}" />`
    }
};

// circle specific features, rounded square
class Circle extends Shape {
    sketchCirc = (color) => {
        return `<circle cx="150" cy="100" r="80" fill="${color}" />`
    }
};

module.exports = { Shape, Triangle, Square, Circle }