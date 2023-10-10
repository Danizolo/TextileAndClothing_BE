const express = require('express');
const authenticateRoute = express.Router();
const AuthenticateController = require('../controllers/authentication_controller');

authenticateRoute.post('/register' ,AuthenticateController.registration);



module.exports = authenticateRoute;


