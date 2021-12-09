// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
  {
      type:'input',
      name:'title',
      message:'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a paragraph briefly describing your project, its uses and your motivation for building it.',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter a description of your project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps for installing your project?',
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log('Please enter the steps for installing your project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide instrucitons and examples for using your project',
    validate: usageInput => {
        if(usageInput) {
            return true;
        } else {
            console.log('Please provide information on the usage of your project!');
            return false
        }
    }
  },
  {
      type:'checkbox',
      name: 'lang',
      message:'What languages are used in your project? ',
      choices:['HTML', 'CSS', 'JavaScript', 'Node.js']
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Please name any collaborators or contributers to your project, if any.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select the license for this project.',
    choices: [' Apache', 'Gnu', 'MIT', 'none']
  }
];
// TODO: Create a function to write README file
     function writeToFile(fileName, data) {
         return fs.writeFileSync(path.join(process.cwd(),fileName), data , err => {
             if(err) throw err;
         });
     };

// TODO: Create a function to initialize app
 function init() {
  inquirer.prompt(questions)
  .then(function(responses) {
    writeToFile('README.md', generateMarkdown({...responses}));
  })


 }

// Function call to initialize app
 init();

