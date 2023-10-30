/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 30/10/2023 - 20:23:56
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 30/10/2023
    * - Author          : DHANUSH
    * - Modification    : 
**/
const express = require('express');
const addProductRoute = express.Router();

const addProductController = require('../../controllers/admin/add_product_controller');

addProductRoute.post('/shirt' ,addProductController.addShirt);
addProductRoute.post('/product/color' ,addProductController.addCorrespondingColor);





module.exports = addProductRoute;


