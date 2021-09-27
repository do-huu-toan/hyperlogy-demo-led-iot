const express = require('express');

var router = express.Router();
const DeviceController = require('../controllers/device.controller')

router.route('/:macAddress')
    .get(DeviceController.search)

module.exports = router;