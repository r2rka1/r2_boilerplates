const inquirer = require('inquirer');

module.exports = {
  configureStructure: () => {
    const questions = [
      {
        name: 'projectName',
        type: 'input',
        message: 'Enter Project Name:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Enter Project Name.';
          }
        }
      },
      {
        name: 'clientFolder',
        type: 'input',
        message: 'Folder Name for Client:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Enter Folder Name for Client:';
          }
        }
      },
      {
        name: 'clientPort',
        type: 'input',
        message: 'PORT for Client:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'PORT for Client:';
          }
        }
      },
      {
        name: 'serverFolder',
        type: 'input',
        message: 'Folder Name for SERVER:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Enter Folder Name for SERVER:';
          }
        }
      },
      {
        name: 'serverPort',
        type: 'input',
        message: 'PORT for SERVER:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'PORT for SERVER:';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
};