const Device = require("../models/Device")

const search = async (req, res, next) => {
    const deviceFound = await Device.findOne({
        where:{
            macAddress: req.params.macAddress
        }
    })

    if(deviceFound)
    {
        return res.status(200).json({
            name: deviceFound.name 
        });
    }
    else{
        return res.status(404).json({
            eror: "Not found"
        })
    }

}

module.exports = {
    search
}