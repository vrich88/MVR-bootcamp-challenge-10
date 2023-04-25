// required dependencies and shapes file imports
const { Shape, Triangle, Square, Circle } = require('./lib/shapes.js');
const fs = require("fs");
const inquirer = require("inquirer");

// user input prompt
inquirer.prompt([
    { /* question for user's initials aka letters to be used in logo stamp */
        type: "input",
        name: "ltrs",
        message: "Enter one (1) to three(3) characters to use on your logo stamp",
        validate: (input) => {
            if (input == "" || input.length > 3) {
                return console.log("Must be one (1) to three(3) characters only!")
            } else {
                return true;
            }
        }
    },
    {  /* question for the letter's color */
        type: "input",
        name: "ltrColor",
        message: "Enter the color keyword or hexadecimal code for your logo stamps's letters",
        validate: (input) => {
            if (input == "") {
                return console.log("Required! Enter the color keyword or hexadecimal code for your logo stamps's letters");
            } else {
                return true;
            }
        }
    },
    {  /* question for user to pick from available shapes */
        type: "list",
        name: "shape",
        message: "Choose the logo stamps's shape",
        choices: ["Triangle", "Square", "Circle"],
    },
    {  /* question for shape's color */
        type: "input",
        name: "color",
        message: "Enter the color keyword or hexadecimal code for your logo stamps's shape",
        validate: (input) => {
            if (input == "") {
                return console.log("Required! Enter the color keyword or hexadecimal code for your logo stamps's shape");
            } else {
                return true;
            }
        }
    },
    {  /* question for background color */
        type: "input",
        name: "bkColor",
        message: "Enter the color keyword or hexadecimal code for your logo stamps's background \n NOTE:  if blank background will be set to ''transparent''",
        validate: (input) => {
            if (input == "") {
                return 00;
            } else {
                return true;
            }
        }
    },
])
    // take the user input data and ues it to generate the logo stamp
    .then((data) => {
        console.log(data);
        let ltrs = data.ltrs;
        let ltrColor = data.ltrColor;
        let shape = data.shape;
        let color = data.color;
        let bkColor = data.bkColor;
        let newShape;
        if (shape === "Triangle") {
            const newShape = new Triangle(color);
            newShape.sketchTri(color);
        } else if (shape === "Square") {
            const newShape = new Square(color);
            newShape.sketchSq(color);
        } else if (shape === "Circle") {
            const newShape = new Circle(color);
            newShape.sketchCirc(color);
        };
        let logoStamp = `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${bkColor}" />
        `
        + newShape +
        `
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${ltrColor}">${ltrs}</text>
        </svg>
    `;
        fs.writeFile(`./examples/${shape}-logo-${ltrs}.svg`, logoStamp, (err) =>
            err ? console.log(err) : console.log("Your logo stamp has been generated and placed in the examples directory"))
    });

// to start logo stamp generator on load
// init();