const express = require('express');
const authenticateRoute = express.Router();
const AuthenticateController = require('../controllers/authentication_controller');

authenticateRoute.post('/register' ,AuthenticateController.registration);
authenticateRoute.post('/loggingIn' ,AuthenticateController.loggingIn);




module.exports = authenticateRoute;


