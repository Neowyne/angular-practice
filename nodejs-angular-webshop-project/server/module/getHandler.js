const DB = require('./db');

module.exports = class GetHandler {
    constructor(req, res) {

        const ordersDB = new DB('orders');
        ordersDB.find().then(
            data => res.end(JSON.stringify(data))
        );
    }
}