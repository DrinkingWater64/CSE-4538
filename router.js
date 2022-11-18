const express = require('express');
const bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended:false})
const homeController = require('./controllers/homecontroller')
const router = express.Router();

router.get('/', homeController.getHome);
router.post('/sendText',urlEncoded, homeController.sendText);

module.exports = router