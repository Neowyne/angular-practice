// Load modules.
const template = require('./template');
const fs = require('./fsPromise');
const db = require('./db');

// Respond to GET requests.
const run = (req, res) => {
    let users = db.findSync('users', { id: 3 });
    template.render('index.html', {
        title: 'yellowRoad students',
        pageTitle: 'yellowRoad, a legjobb út a sikerhez',
        users: JSON.stringify(users, null, 4)
    }).then((html) => {
        res.end(html);
    });
};

//
module.exports = {
    run: run
};