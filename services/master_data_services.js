
const PermissionModel = require('../models/permissions')
const Constants = require('../utilities/constants')


exports.checkPermissionExists = async (params) => {


    const paraMeters = params;

    const permission = await PermissionModel.findOne({
        where: { NAME: paraMeters.name, IS_ACTIVE: Constants.Status._active }
    });


    if (permission) {
        return true;
    } else {
        return false;
    }


}