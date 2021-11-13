const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register.controller');
//const validatorHandler = require(`../middlewares/validator.handler`)



router.get('/dashboard',
    registerController.getRegister
    )
    
module.exports = router;