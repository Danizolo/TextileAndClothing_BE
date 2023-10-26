/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 14/10/2023 - 22:44:05
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 14/10/2023
 * - Author          : DHANUSH
 * - Modification    :
 **/

const ShirtModel = require("../models/shirts");
const BrandsModel = require("../models/brands");
const Constants = require("../utilities/constants");
const ProductSizes = require("../models/product_sizes");
const ProductColors = require("../models/product_colors");
const Colors = require("../models/colors");
const Sizes = require("../models/sizes");
const ManufacturerModel = require("../models/manufacturers");
const PricesModel = require("../models/prices");
const ProductImagesModel = require("../models/product_images");
const AllProducts = require('../models/all_products')

exports.getShirts = async (req, res) => {
  try {
    const Shirts = await ShirtModel.findAll({
      attributes: [
        "SHIRT_ID",
        "NAME",
        "TYPE",
        "MATERIAL",
        "SLEEVE",
        "FIT",
        "QUANTITY",
      ],
      include: [
        
        {
          model: BrandsModel,
          attributes: ["BRAND_NAME"],
          include: [
            {
              model: ManufacturerModel,
              through: { model: PricesModel, attributes: ["BASE_PRICE", "PROFIT_PERCENTAGE"] },
              as: "productcost",
              attributes: ["MANUFACTURER_NAME"],
            },
          ],
        },
        {
          model: ProductSizes,
          include: [
            {
              model: Sizes,
              as: "availableSizes",
              attributes: ["DEFAULT_SIZE"],
            },
          ],
        },
        {
          model: ProductColors,
          include: [
            {
              model: Colors,
              as: "availableColors",
              attributes: ["DEFAULT_COLOR"]
            },
          ],
        },
        {
          model: AllProducts,
          as: 'images',
          attributes: ["PRODUCT_ID"],
          include: [
            {
              model: Colors,
              unique: false,
              attributes: ["DEFAULT_COLOR"],
              through: { model: ProductImagesModel, attributes: ["IMG_NAME"] },
              as: 'productimages',
            }
          ],

        },
      ],
    });

    if (Shirts) {
      return res.status(Constants.StatusCodes.SuccessResponse._ok).json({
        Status: "Success",
        Message: "Successfully fetched all data",
        Data: Shirts,
      });
    } else {
      return res
        .status(Constants.StatusCodes.ClientErrorResponse._badRequest)
        .json({
          Status: "Error",
        });
    }
  } catch (error) { }
};
