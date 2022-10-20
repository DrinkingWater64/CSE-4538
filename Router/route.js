const express = require('express');
const router = express.Router();
const controller = require('../Controller/controller.js');
const bodyParser = require('body-parser');

const urlencoded = bodyParser.urlencoded({extended:false});

router.get('/', controller.gohome);

router.get('/books', controller.goBook);

router.get('/addbooks', controller.goAddBook);

router.post('/addbooks', controller.addBooks_post);


module.exports = router;