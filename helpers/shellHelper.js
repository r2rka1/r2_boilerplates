const shell = require('shelljs')
const fs = require('fs');

module.exports = {
  navigateToRoot: (rootFolder, projectName) => shell.cd(rootFolder + `/${projectName}/`),
  cloneRepoClean: async (repo, dirname, rootFolder, projectName) => {
    await shell.exec(`git clone ${repo} ${dirname}`)
    await fs.rmdirSync(`${rootFolder}/${projectName}/${dirname}/.git`, { recursive: true })
  },
  composeBuild: async (dockerFolder) => {
    await shell.cd(dockerFolder);
    await shell.exec('sh app-build.sh')
  }
}