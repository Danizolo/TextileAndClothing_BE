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
const masterDataRoute = express.Router();

const MasterDataController = require('../../controllers/admin/master_data_controller');

masterDataRoute.post('/shirt' ,MasterDataController.addShirt);
masterDataRoute.post('/product/color' ,MasterDataController.addCorrespondingColor);
masterDataRoute.post('/manufacturer' ,MasterDataController.addManufacturer);
masterDataRoute.post('/brand' ,MasterDataController.addBrand);
masterDataRoute.post('/permission' ,MasterDataController.addPermission);



module.exports = masterDataRoute;


