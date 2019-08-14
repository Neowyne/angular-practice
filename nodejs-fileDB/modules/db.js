// Load modules.
const fs = require('./fsPromise');
const path = require('path');
const dbDir = path.join(__dirname, 'tables');
const ext = '.json';

//Find data.
const find = (table, options) => {
    let tablePath = path.join(dbDir, table + ext);
    return new Promise((resolve, reject) => {
        fs.readFile(tablePath)
            .then((data) => {
                data = JSON.parse(data);
                if (Object.keys(options).length > 0) {
                    data = filter(data, options);
                }
                resolve(data);
            });
    });
};

const findSync = (table, options) => {
    let tablePath = path.join(dbDir, table + ext);
    let data = fs.readFileSync(tablePath);
    data = JSON.parse(data);
    if (Object.keys(options).length > 0) {
        data = filter(data, options);
    }
    return data;
};

const filter = (table, options) => {
    let keys = Object.keys(options);
    let result = [];
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < keys.length; j++) {
            console.log(table[i][keys[j]], options[keys[j]]);
            if (table[i][keys[j]]) {
                if (table[i][keys[j]] == options[keys[j]]) {
                    result.push(table[i]);
                }
            }
        }
    }
    return result;
}

module.exports = {
    find: find,
    findSync: findSync
}