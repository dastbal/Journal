const express = require('express');
const router = express.Router();
const journalController = require('../controllers/journal.controller');
//const registerRouter = require('./register.router')

//const validatorHandler = require(`../middlewares/validator.handler`)



router.get('/home',
journalController.getHome
)
router.get('/feed',
journalController.getFeed
)
router.get('/profile',
journalController.getProfile
)

//router.use('/register', registerRouter)


module.exports = router;