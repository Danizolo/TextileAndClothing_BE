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


exports.loggingIn = async (req, res) => {

    try {

        const paraMeters = req.body;

        const authenticateUser = await UserModel.findOne({
            where: {
                MAIL: paraMeters.mail,
                CURRENT_PASSWORD: paraMeters.passWord,
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






        if (authenticateUser) {

           const _date = new Date();
           const _istTime = _date.toLocaleTimeString('en',
                 { timeStyle: 'short', hour12: true, timeZone: 'Asia/Kolkata'});

            const updateSession = await UserSession.update({ IS_LOGGING_IN: 1 }, { where: { USER_ID: authenticateUser.USER_ID } });
            const insertHistory = await LoginHistory.create({ 
                USER_ID: authenticateUser.USER_ID,
                DATE: _date,
                LOGIN_AT: _istTime
            });


            if (updateSession && insertHistory) {
                return res.status(Constants.StatusCodes.SuccessResponse._ok).json({
                    Status: 'Success',
                    Message: 'Successfully Authenticated...',
                    Data: authenticateUser
                });
            }

            



        } else {
            return res.status(Constants.StatusCodes.ClientErrorResponse._badRequest).json({
                Status: 'Error',
            })
        }


    } catch (error) {

    }
}