const files = require('./helpers/files');
const inquirer  = require('./helpers/inquirer');
const shellHelper = require('./helpers/shellHelper')
require('dotenv').config()

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');


clear();

console.log(
  chalk.yellow(
    figlet.textSync('R2 BOILERPLATES', { horizontalLayout: 'full' })
  )
);

const run = async () => {
  const credentials = await inquirer.configureStructure();
  const { projectName, clientFolder, clientPort, serverFolder, serverPort } = credentials
  if (!files.directoryExists(`./${projectName}`)) {
    await files.mkdir(`./${projectName}`)
    await shellHelper.navigateToRoot(__dirname, projectName);

    await shellHelper.cloneRepoClean(process.env.GIT_DOCKER, process.env.FOLDER_DOCKER, __dirname, projectName)
    await shellHelper.cloneRepoClean(process.env.GIT_NODEJS_POSTGRES, process.env.FOLDER_SERVER, __dirname, projectName)
    await shellHelper.cloneRepoClean(process.env.GIT_VUEJS, process.env.FOLDER_CLIENT, __dirname, projectName)

    await shellHelper.composeBuild(`${__dirname}/${projectName}/${process.env.FOLDER_DOCKER}`)
    console.log(chalk.yellow(`Building successful! Wait a few moments to finalize builds.`));
    console.log(chalk.green(`Client PORT: 9000, Server PORT: 9001, Postgres PORT: 5432`));
    process.exit();

  } else {
    console.log(chalk.red(`Directory ${projectName} already exists!`));
    process.exit();
  }
};

run();
