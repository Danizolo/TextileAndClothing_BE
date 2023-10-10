
const UserModel = require('../models/users')
const Constants = require('../utilities/constants')


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

            res.status(Constants.StatusCodes.Success._created).json({
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