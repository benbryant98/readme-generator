// TODO: Include packages needed for this application
var inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    "What motivated you to create this project?",
    "What problem does this project solve?",
    "Did you learn anything from the project experience?",
    "Name some features that make this project unique.",
    "Are there any steps required to install/implement the project?",
    "Please provide instructions for using your application."
];

inquirer
.prompt([
    {
      type: 'input',
      message: 'What motivated you to create this project?',
      name: 'motivation',
    },
    {
      type: 'input',
      message: 'What problem does this project solve?',
      name: 'problem',
    },
    {
      type: 'input',
      message: 'What are some things you learned while working on this project?',
      name: 'learned',
    },
    {
        type: 'input',
        message: 'Name some features that make this project unique.',
        name: 'features',
    },
    {
        type: 'input',
        message: 'Please describe any steps required to install this application.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please include instructions for using your application.',
        name: 'instructions',
    },
  ])
    .then((answers => {
        console.log(answers)
    }));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
