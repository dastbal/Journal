const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { updateUserSchema,  createUserSchema , loginUserSchema} = require(`../schemas/user.schema`)
const validatorHandler = require(`../middlewares/validator.handler`)



router.get('/',
    authController.getLogin
    )
    .post('/',
        validatorHandler(loginUserSchema, 'body','login'),
        authController.postLogin
        )
router.post('/logout',
    authController.postLogout
    )
router.get('/signup',
    authController.getSignup
    )
    
    
    .post('/signup',
    validatorHandler(createUserSchema, 'body','signup'),
    authController.postSignup
    )
router.get('/edit-profile',
    authController.getEditProfile
    
    )

router.get('/reset',
    authController.getReset
    )
router.post('/reset',
    authController.postReset
    )

module.exports = router;