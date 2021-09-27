require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan');
var jwt = require('jsonwebtoken')
const LoginRoute = require('./routes/login.route')
const DeviceRoute = require('./routes/device.route')

const db = require('./models/database');

const initDB = process.env.INIT_DB;
const InitSeeder =  require('./models/seeder')
//CORS:
var cors = require('cors');
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

if(initDB === "true"){
    db.sync({force: true}).then(()=>{
        InitSeeder();
    })
}
else{
    db.sync({force: false})
}

//Middleware:
app.use(cors(corsOptions));
app.use(morgan('combined'));
app.use(express.json())
app.use('/login', LoginRoute)
app.use('/device', DeviceRoute)


app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})