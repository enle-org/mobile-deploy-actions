const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

try {

  const EXPO_USERNAME	 = core.getInput('expo_username');
  const EXPO_PASSWORD	 = core.getInput('expo_password');

  exec.exec('curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install | xargs -0 /usr/bin/ruby -e')
    .then(() => exec.exec(`brew install wget`))
    .then(() => exec.exec(`yarn`))
    .then(() => exec.exec(`yarn global add expo-cli`))
    .then(() => exec.exec(`yarn run expo login -u ${EXPO_USERNAME} -p ${EXPO_PASSWORD}`))
    .then(() => exec.exec(`yarn build:android > output.txt`))
    .then(() => exec.exec(`tail -n 3 ./output.txt | head -n 1 | cut -c47- | xargs wget`))
    .catch(e => core.setFailed(e));
    
} catch (error) {
  core.setFailed(error.message);
}

// Successfully built standalone app: https://expo.io/artifacts/1b9a6ef8-db97-4274-8812-5d0865cb46fc