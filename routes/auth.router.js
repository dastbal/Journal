const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { updateUserSchema,  createUserSchema} = require(`../schemas/user.schema`)
const validatorHandler = require(`../middlewares/validator.handler`)



router.get('/',
    authController.getLogin
    )
router.get('/signup',
    authController.getSignup
    )

router.post('/signup',
    validatorHandler(createUserSchema, 'body','signup'),
    authController.postSignup
    )



module.exports = router;