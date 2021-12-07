const express = require('express');
const router = express.Router();
const journalController = require('../controllers/journal.controller');
const registerRouter = require('./register.router')
const homeRouter = require('./home.router')

//const validatorHandler = require(`../middlewares/validator.handler`)



router.use('/register', registerRouter)
router.use('/home', homeRouter)
router.get('/feed',
journalController.getFeed
)
router.get('/feed/:id',
journalController.getUserName
)
router.get('/profile',
journalController.getProfile
)



module.exports = router;