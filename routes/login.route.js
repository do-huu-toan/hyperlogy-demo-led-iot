const express = require('express');

var router = express.Router();
const LoginController = require('../controllers/login.controller')

router.route('/')
    .post(LoginController.login)

module.exports = router;