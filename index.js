// Included inquirer@8.2.4
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?',
      },
      {
        type: 'input',
        name: 'toc',
        message: 'Please provide the Table of Content',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide the instruction for the Installation',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please provide the Test Instructions for this project',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide the Usage for this project',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your Git Hub Username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
    ]);
  };
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
