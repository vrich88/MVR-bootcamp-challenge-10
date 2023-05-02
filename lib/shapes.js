// main shape class constructor with primary common details
class Shape {
    constructor(color) {
        this.color = color;
    }
};

// triangle specific features, would be cool to figure out the other triangle orientations
class Triangle extends Shape {
    render = (color) => {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`
    }
};

// square specific features, using rect because all squares are rectangles but not all rectangles are squares
class Square extends Shape {
    render = (color) => {
        return `<rect x="75" y="25" width="150" height="150" fill="${color}" />`
    }
};

// circle specific features, rounded square make better wheel
class Circle extends Shape {
    render = (color) => {
        return `<circle cx="150" cy="100" r="80" fill="${color}" />`
    }
};

module.exports = { Shape, Triangle, Square, Circle }