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
const ProductColors = require("../../models/product_colors");
const ProductSizes = require("../../models/product_sizes");

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
    // const paraMeters = req.body;
    const data = [
      {
        productId: 3,
        colorId: 1,
      },
      {
        productId: 3,
        colorId: 2,
      },
      {
        productId: 3,
        colorId: 6,
      },
    ];

    const dataToInsert = [];

    data.forEach(element => {
        dataToInsert.push({
          PRODUCT_ID: element.productId,
          COLOR_TABLE_ID: element.colorId,

        });
    });






    const addProductColor = await ProductColors.bulkCreate(dataToInsert);


    if (1) {
        res.status(Constants.StatusCodes.SuccessResponse._ok).json({
          Status: true,
        });
    }

    //   const addProduc = await ProductColors.create({
    //     PRODUCT_ID: paraMeters.productId,
    //     COLOR_TABLE_ID: paraMeters.colorId,
    //   });
  } catch (err) {
    res.status(Constants.StatusCodes.ClientErrorResponse._badRequest).json({
      Status: "Error",
      Message: err.message,
    });
  }
};


exports.decodeArray = (data) => {

   

}
