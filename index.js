// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const path = require("path");
const generateMarkdown = ("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Name your project",
    },
    {
        type: "input",
        name: "description",
        message: "Describe application functionality and purpose",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please choose an applicable license",
        options: ["MIT", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none", "APACHE2.0", "Artistic2.0"],
    },
    {
        type: "input",
        name: "require",
        message: "List project dependencies here",
    },
    {
        type: "input",
        name: "usage",
        message: "Languages or tech for this project",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
