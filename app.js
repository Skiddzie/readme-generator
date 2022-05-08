const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter some contribution details',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your repo (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('You need to enter a repo title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the repo (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to enter a repo description!');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license is your github project under?',
      choices: ['GPL', 'MIT', 'Apache', 'BSD']
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter some installation instructions',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage info',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'enter some info on testing',
    },
  ]);
};

promptUser()
  .then(data => {
    const pageHTML = generatePage(data);

    fs.writeFile('./readme/README.md', pageHTML, err => {
      if (err) throw new Error(err);

      console.log('Your readme has been generated to the readme directory.');
    });
  });