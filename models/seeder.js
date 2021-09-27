
const Device = require("./Device")
const User = require("./User")

const InitSeeder = async ()=>{
    const newUser = new User({
        username: 'admin',
        password: 'admin'
    })
    await newUser.save();

    const newDevice = new Device({
        name: "ESP",
        macAddress: "0:0:0:0",
        userId: newUser.id
    })

    await newDevice.save();
}

module.exports = InitSeeder
