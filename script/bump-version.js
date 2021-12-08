const { readFileSync, writeFileSync } = require('fs');
const semver = require('semver');

const level = process.argv[2] ?? 'patch';
const data = JSON.parse(readFileSync('package.json'));

const version0 = data.version;
data.version = semver.parse(data.version).inc(level).toString();
console.log(`${version0} -> ${data.version}`);

writeFileSync('package.json', JSON.stringify(data, null, '  ')+'\n');
