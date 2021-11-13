const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home.controller');

//const validatorHandler = require(`../middlewares/validator.handler`)


router.get('/',
homeController.getHome
)
    
module.exports = router;