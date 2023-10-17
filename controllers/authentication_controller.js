/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 14/10/2023 - 23:36:22
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/10/2023
    * - Author          : DHANUSH
    * - Modification    : 
**/

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
        const insertHistory = await LoginHistory.create({
            USER_ID: userId,
            DATE: Constants.dateToday(),
            LOGIN_AT: Constants.istTimeNow(date)
        });

        if (updateSession && insertHistory) {
            console.log('true');
            return true;

        } else {
            console.log("error");
            return false;
            // reverse session and history logic will goes here
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
                MAIL: params.mail,
                CURRENT_PASSWORD: params.passWord,
                IS_ACTIVE: Constants.Status._active
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

        const jwtToken = jwt.sign(
            { user_id: _user.USER_ID },
            ENV.SECRET_ACCESS_TOKEN
        );

        if (_user) {

            const userUpdated = this.updateUserSessionAndHistory(_user.USER_ID, res);

            if (await userUpdated) {
                res.status(Constants.StatusCodes.SuccessResponse._ok).json({
                    Status: 'Success',
                    Message: 'Successfully Authenticated...',
                    Data: _user,
                    Token: jwtToken
                });
            } else {
                res.status(Constants.StatusCodes.ClientErrorResponse._badRequest).json({
                    Status: 'Error',
                })
            }



        } else {
            res.status(Constants.StatusCodes.ClientErrorResponse._notFound).json({
                Status: false,
                Message: 'User Not Found...'
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

        const _userExists = ApplicationServices.checkUserExists(paraMeters);

        if (_userExists) {
            this.signIn(res, paraMeters);

        } else {
            res.status(Constants.StatusCodes.ClientErrorResponse._badRequest).json({
                Status: false,
                Message: 'User not Registered...'
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




