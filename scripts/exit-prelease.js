const execa = require('execa');
const path = require('path');
const fs = require('fs-extra');

const cwdPath = process.cwd();
const prePath = path.join(cwdPath, '.changeset', 'pre.json');

const PROJECT = [
  ['@siemens/ix-aggrid', 'aggrid'],
  ['@siemens/ix-angular', 'angular'],
  ['@siemens/ix', 'core'],
  ['@siemens/ix-echarts', 'echarts'],
  ['@siemens/ix-react', 'react'],
  ['@siemens/ix-vue', 'vue'],
].map(([pkg, p]) => [pkg, path.join(cwdPath, 'packages', p, 'package.json')]);

if (!fs.existsSync(prePath)) {
  throw Error('pre.json not exist.');
}

const pre = JSON.parse(fs.readFileSync(prePath).toString());
Object.keys(pre.initialVersions).forEach((pkg) => {
  const version = pre.initialVersions[pkg];
  console.log(`Reset version ${pkg} to ${version}`);

  const patchPkg = PROJECT.find(([projectPkg]) => projectPkg === pkg);
  if (patchPkg) {
    updatePackageJSON(patchPkg[1], patchPkg[0], version);
  }
});

function updatePackageJSON(packageJSONPath, packageName, newVersion) {
  fs.readFile(packageJSONPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading package.json:', err);
      return;
    }

    try {
      const packageJSON = JSON.parse(data);

      if (packageJSON.dependencies && packageJSON.dependencies[packageName]) {
        const existingVersion = packageJSON.dependencies[packageName];
        packageJSON.dependencies[packageName] = preserveSemVer(
          existingVersion,
          newVersion
        );
      }

      if (
        packageJSON.devDependencies &&
        packageJSON.devDependencies[packageName]
      ) {
        const existingVersion = packageJSON.devDependencies[packageName];
        packageJSON.devDependencies[packageName] = preserveSemVer(
          existingVersion,
          newVersion
        );
      }

      fs.writeFile(
        packageJSONPath,
        JSON.stringify(packageJSON, null, 2),
        'utf8',
        (err) => {
          if (err) {
            console.error('Error writing to package.json:', err);
            return;
          }
          console.log(`Successfully updated ${packageName} to ${newVersion}`);
        }
      );
    } catch (err) {
      console.error('Error parsing package.json:', err);
    }
  });
}

function preserveSemVer(existingVersion, newVersion) {
  const semverRegex = /(\^|~)?(\d+)\.(\d+).(\d+)/;
  const match = semverRegex.exec(existingVersion);

  if (match) {
    const caretTilde = match[1] || '';
    return `${caretTilde}${newVersion}`;
  }

  return newVersion;
}
