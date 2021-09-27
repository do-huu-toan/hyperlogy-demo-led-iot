var jwt = require('jsonwebtoken')



const createToken = (id) => {
    console.log(process.env.SECRET_TOKEN);
    var token = jwt.sign({ id: id }, process.env.SECRET_TOKEN);
    return token;
}

module.exports = {
    createToken
}