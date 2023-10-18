const UserModel = require('../models/users');
const Constants = require('../utilities/constants')



exports.checkUserEmailExists = async (params, res) => {
    try {

        const _user = await UserModel.findOne({
            where: {
                MAIL: params.mail,
                IS_ACTIVE: Constants.Status._active
            }
        });

        return _user ? true : false;


    } catch (err) {

        res.status(Constants.StatusCodes.ClientErrorResponse._badRequest).json({
            Status: false,
            Message: err.message
        })
    }
}  


exports.checkUserPassWordExists = async (params,res) => {

    try {

        const _userPassWord = await UserModel.findOne({
            where: {
                MAIL: params.mail,
                CURRENT_PASSWORD: params.passWord
            }

        });

        return _userPassWord ? true : false;

        
    } catch (error) {
        res.status(Constants.StatusCodes.ClientErrorResponse._badRequest).json({
            Status: false,
            Message: err.message0
        })
    }

}


