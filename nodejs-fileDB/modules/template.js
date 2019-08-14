// Load modules.
const fs = require('./fsPromise');
const path = require('path');
const viewDir = path.join(__dirname, '../views');

// Get HTML content and include variables.
const render = (name, vars = {}) => {
    return new Promise((resolve, reject) => {
        let filePath = path.join(viewDir, name);
        fs.readFile(filePath)
            .then((data) => {
                let html = includeVars(data, vars);
                resolve(html);
            }, (err) => {
                resolve('Err: ' + err.toString());
            });
    });
};

// Include variables.
const includeVars = (html, vars) => {
    for (var k in vars) {
        let reg = new RegExp("\\$\\{[]*" + k + "[]*(\\}){1}", 'g');
        html = html.replace(reg, vars[k]);
    }

    return html;
}

module.exports = {
    render: render
};