var yaml = require('js-yaml'),
    fs = require('fs');

module.exports = yaml.safeLoad(fs.readFileSync(__dirname + '/smaas.yml','utf8'));
