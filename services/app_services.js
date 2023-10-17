const UserModel = require('../models/users');



exports.checkUserExists = async (params) => {

    const _user = await UserModel.findOne({
        where: {
            MAIL: params.mail
        }
    });

    return _user ? true : false;


}  