// all routes HTTP method (GET/PUT/POST/DELETE) will be present here
BookingController = require('../controller/destination-controller');
loginController = require('../controller/login-controller');
module.exports = (app) => {

    //login
    app.post('/login', loginController.login);
    // import your existing Booking controller here, which contains method for all CRUD operations

    // APi endpoint to create a new Booking item

    // API endpoint to get all Booking items
    app.get('/list', BookingController.findAll);

    // API endpoint to get single Booking item
    app.get('/list/:id', BookingController.findOne);

    // API endpoint to update Booking with BookingId

    // API endpoint to delete Booking with BookingId

};