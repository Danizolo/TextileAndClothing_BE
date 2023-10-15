/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 14/10/2023 - 22:43:04
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/10/2023
    * - Author          : DHANUSH
    * - Modification    : 
**/
const express = require('express');
const productRoute = express.Router();
const ProductController = require('../controllers/product_controller')

productRoute.get('/get-shirts' ,ProductController.getShirts);




module.exports = productRoute;


