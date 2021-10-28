// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const gm = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the link to the deployed application?',
        name: 'link',
    },
    {
        type: 'input',
        message: 'What is a short description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What are the instructions and some examples of use for your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the instructions for someone to run a test of your project?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is the link to your GitHub profile?',
        name: 'profile',
    },
    {
        type: 'input',
        message: 'What is your preferred email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please list other contributors here.',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Please list credits and sources used here.',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Which license would you like to use?',
        choices: ['Apache License 2.0', 'MIT'],
        name: 'license',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFileSync(fileName, gm(data))
    };

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => writeToFile('README.md', data))
    .then(() => console.log('Successfully wrote file'))
    .catch((err) => console.error(err))
    };

// Function call to initialize app
init();
