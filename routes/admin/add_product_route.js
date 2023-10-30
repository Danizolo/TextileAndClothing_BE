const express = require('express');
const addProductRoute = express.Router();

const addProductController = require('../../controllers/admin/add_product_controller');

addProductRoute.post('/shirt' ,addProductController.addShirt);




module.exports = addProductRoute;


