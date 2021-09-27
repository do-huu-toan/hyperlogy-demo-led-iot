const AuthController = require('../controllers/auth.controller')
const User = require('../models/User');
const Device = require('../models/Device');

const login = async (req, res, next) => {

    const username = req.body.username;
    const password = req.body.password;
    const userFound = await User.findOne({
        where: {
            username: username,
            password: password
        }
    })

    var deviceFound;
    if (userFound) {
        deviceFound = await Device.findOne({
            where: {
                userId: userFound.id,
                macAddress: req.body.macAddress
            }
        })
    }

    if (deviceFound) {
        token = AuthController.createToken(deviceFound.id);
        return res.status(200).json({
            token: token,
            topic: userFound.username + "/"
        })
    }
    else{
        return res.status(404).json({
            error: "Not found"
        })
    }


}

module.exports = {
    login
}