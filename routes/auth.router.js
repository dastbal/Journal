const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { updateUserSchema,  createUserSchema , loginUserSchema} = require(`../schemas/user.schema`)
const validatorHandler = require(`../middlewares/validator.handler`)



router.get('/',
    authController.getLogin
    )
router.post('/',
    validatorHandler(loginUserSchema, 'body','login'),
    authController.postLogin
    )
router.get('/signup',
    authController.getSignup
    )

router.post('/signup',
    validatorHandler(createUserSchema, 'body','signup'),
    authController.postSignup
    )
router.get('/edit-profile',
    authController.getEditProfile
    
    )


module.exports = router;