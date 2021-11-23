const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register.controller');
//const validatorHandler = require(`../middlewares/validator.handler`)



router.get('/',
    registerController.getRegister
    )

router.post('/create-sheet',
    registerController.postCreateSheet
    )
    
module.exports = router;