const DB = require('./db');

module.exports = class GetHandler {
<<<<<<< HEAD
    constructor(req, res) {

        const ordersDB = new DB('orders');
        ordersDB.find().then(
            data => res.end(JSON.stringify(data))
        );
    }
}
=======
  constructor(req, res) {

    const ordersDB = new DB('orders');

    res.end('Hello');
  }
};
>>>>>>> 144301cba7e18638c5a0bba2887f52b0be221d99
