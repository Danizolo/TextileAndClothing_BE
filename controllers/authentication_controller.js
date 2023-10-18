

const UserModel = require('../models/users')
const Constants = require('../utilities/constants')
const UserPermissionModel = require('../models/user_permissions')
const PermissionModel = require('../models/permissions')
const UserSession = require('../models/user_sessions')
const LoginHistory = require('../models/login_histories')
const ApplicationServices = require('../services/app_services')
const jwt = require('jsonwebtoken')
const ENV = process.env;




exports.updateUserSessionAndHistory = async (userId, res) => {

    try {
        const date = new Date();


        const updateSession = await UserSession.update({ IS_LOGGING_IN: Constants.Status._active }, { where: { USER_ID: userId } });

        if (updateSession) {
            const insertHistory = await LoginHistory.create({
                USER_ID: userId,
                DATE: Constants.dateToday(),
                LOGIN_AT: Constants.istTimeNow(date)
            });


            if (insertHistory) {
                return true;

            } else {
                const reUpdateSession = await UserSession.update({ IS_LOGGING_IN: Constants.Status._inActive }, { where: { USER_ID: userId } });
                return false;
            }
        } else {
            return false;

        }

    } catch (err) {
        res.status(Constants.StatusCodes.ClientErrorResponse._badRequest).json({
            Status: 'Error',
            Message: err.message
        })

    }


}


exports.signIn = async (res, params) => {

    try {

        const _user = await UserModel.findOne({
            where: {
                MAIL: params.mail
            },
            attributes: ['USER_ID', 'NAME', 'MAIL', 'PHONE_NUMBER', 'AGE', 'AADHAR', 'USER_TYPE', 'IS_ADMIN'],
            include: [{
                model: UserPermissionModel,
                include: [{
                    model: PermissionModel,
                    as: 'UserPermissions',
                    where: { IS_ACTIVE: Constants.Status._active },
                    attributes: ['NAME']
                }]
            }]
        });


        if (_user) {

            const jwtToken = jwt.sign(
                { user_id: _user.USER_ID },
                ENV.SECRET_ACCESS_TOKEN
            );

            if (jwtToken) {
                const userUpdated = this.updateUserSessionAndHistory(_user.USER_ID, res);

                if (userUpdated) {
                    res.status(Constants.StatusCodes.SuccessResponse._ok).json({
                        Status: 'Success',
                        Message: 'Successfully Authenticated...',
                        Data: _user,
                        Token: jwtToken,
                    });
                } else {
                    res.status(Constants.StatusCodes.ClientErrorResponse._badRequest).json({
                        Status: 'Error',
                    })
                }

            }else {
                res.status(Constants.StatusCodes.ClientErrorResponse._badRequest).json({
                    Status: 'Error',
                    Message: 'Failed in Token generating, Please Login again...'
                })

            }

        }else {
            res.status(Constants.StatusCodes.ClientErrorResponse._badRequest).json({
                Status: 'Error',
                Message: 'Authentication failed, Please try again later...'
            })
        }

    } catch (err) {
        res.status(Constants.StatusCodes.ClientErrorResponse._badRequest).json({
            Status: 'Error',
            Message: err.message
        })

    }




}





// --- // ---- // ---- // ---- // ---- // ---- // ---- // ---- // ---- // ---- // ---- // ---- // --- // ---- // ---- // ---- // ---- 





exports.registration = async (req, res) => {
    try {

        const paraMeters = req.body;

        const userRegistered = await UserModel.create({
            NAME: paraMeters.name,
            PASSWORD: paraMeters.passWord,
            CURRENT_PASSWORD: paraMeters.passWord,
            MAIL: paraMeters.mail,
            PHONE_NUMBER: paraMeters.phoneNumber,
            AGE: paraMeters.age,
            AADHAR: paraMeters.aadhar,
            USER_TYPE: paraMeters.userType
        });

        if (userRegistered) {

            res.status(Constants.StatusCodes.SuccessResponse._created).json({
                Status: 'Success',
                Message: 'User has added Successfully...',

            })

        } else {
            res.status(400).json({
                Status: 'Error'
            })
        }

    } catch (error) {

    }
}


exports.authenticate = async (req, res) => {

    try {

        const paraMeters = req.body;

        const _userExists = await ApplicationServices.checkUserEmailExists(paraMeters);
        const _passWordExists = await ApplicationServices.checkUserPassWordExists(paraMeters);

        if (_userExists) {
            if (_passWordExists) {
                this.signIn(res, paraMeters);

            } else {
                res.status(Constants.StatusCodes.ClientErrorResponse._badRequest).json({
                    Status: false,
                    Message: 'Incorrect Password...'
                })
            }

        } else {
            res.status(Constants.StatusCodes.ClientErrorResponse._badRequest).json({
                Status: false,
                Message: 'User Not Found'
            })
        }

    } catch (err) {
        res.status(Constants.StatusCodes.ServerErrorResponse._internalError).json({
            Status: false,
            Message: 'Something went Wrong',
            Error: err.message
        })
    }
}




