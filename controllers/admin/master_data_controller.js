/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 30/10/2023 - 19:55:36
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 30/10/2023
 * - Author          : DHANUSH
 * - Modification    :
 **/

const Constants = require("../../utilities/constants");
const ShirtModel = require("../../models/shirts");
const ProductColorsModel = require("../../models/product_colors");
const ProductSizesModel = require("../../models/product_sizes");
const ManufacturerModel = require('../../models/manufacturers')
const BrandsModel = require('../../models/brands')
const PermissionModel = require('../../models/permissions')
const MasterDataServices = require('../../services/master_data_services')

exports.addShirt = async (req, res) => {
  try {
    const paraMeters = req.body;

    const addNewShirt = await ShirtModel.create({
      BRAND_TABLE_ID: paraMeters.brandId,
      NAME: paraMeters.labelName,
      TYPE: paraMeters.type,
      MATERIAL: paraMeters.material,
      SLEEVE: paraMeters.sleeve,
      FIT: paraMeters.fit,
      QUANTITY: paraMeters.quantity,
      CREATED_BY: paraMeters.userId,
    });
  } catch (err) {
    res.status(Constants.StatusCodes.ClientErrorResponse._badRequest).json({
      Status: "Error",
      Message: err.message,
    });
  }
};

exports.addCorrespondingColor = async (req, res) => {
  try {
    const paraMeters = req.body;
    const dataToInsert = [];

    paraMeters.Colors.forEach(element => {
      dataToInsert.push({
        PRODUCT_ID: element.productId,
        COLOR_TABLE_ID: element.colorId,

      });
    });

    const addProductColor = await ProductColorsModel.bulkCreate(dataToInsert);


    if (addProductColor) {
      res.status(Constants.StatusCodes.SuccessResponse._ok).json({
        Status: true,
      });
    }
  } catch (err) {
    res.status(Constants.StatusCodes.ClientErrorResponse._badRequest).json({
      Status: "Error",
      Message: err.message,
    });
  }
};


exports.addManufacturer = async (req, res) => {


  try {

    const paraMeters = req.body;

    const addManufacturer = await ManufacturerModel.create({
      MANUFACTURER_NAME: paraMeters.manufacturer
    });

    if (addManufacturer) {
      res.status(Constants.StatusCodes.SuccessResponse._ok).json({
        Status: 'Success',
        Message: 'New Manufacturer added Successfully...'
      });
    }

  } catch (err) {
    res.status(Constants.StatusCodes.ClientErrorResponse._badRequest).json({
      Status: "Error",
      Message: err.message
    });
  }


}


exports.addBrand = async (req, res) => {


  try {

    const paraMeters = req.body;

    const addBrand = await BrandsModel.create({
      BRAND_NAME: paraMeters.brand,
      MANUFACTURER_TABLE_ID: paraMeters.manufacturerId

    });

    if (addBrand) {
      res.status(Constants.StatusCodes.SuccessResponse._ok).json({
        Status: 'Success',
        Message: 'New Brand added Successfully...'
      });
    }

  } catch (err) {
    res.status(Constants.StatusCodes.ClientErrorResponse._badRequest).json({
      Status: "Error",
      Message: err.message
    });
  }


}




// adding new permission from admin side
exports.addPermission = async (req, res) => {

  try {

    const paraMeters = req.body;

    const permissionExists = MasterDataServices.checkPermissionExists(paraMeters);

    if (permissionExists) {
      res.status(Constants.StatusCodes.ClientErrorResponse._alreadyExists).json({
        Status: true,
        Message: 'Permission Exists, Add Something New...'
      });

    } else {
      const addNewPermission = await PermissionModel.create({
        NAME: paraMeters.name
      });

      if (addNewPermission) {
        res.status(Constants.StatusCodes.SuccessResponse._ok).json({
          Status: 'Success',
          Message: 'New Permission Created...'
        });
      }
    }



  } catch (err) {
    res.status(Constants.StatusCodes.ClientErrorResponse._badRequest).json({
      Status: "Error",
      Message: err.message
    });
  }

}
