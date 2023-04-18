// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const readme = require('./utils/readme');
// TODO: Create an array of questions for user input

inquirer
.prompt([
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the name of your project repository as it appears on github?',
        name: 'repository',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'Which license is your project using?',
        name: 'license',
        choices: ['MIT', 'GNU GPLv3', 'Apache', 'Mozilla'],
    },
    {
      type: 'input',
      message: 'In a sentence or two, what motivated you to create this project?',
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
        const README = readme.generateReadme(answers);
        writeToFile('README.md', README);
    }));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
    error ? console.log(error) : console.log('README created successfully!'));
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
