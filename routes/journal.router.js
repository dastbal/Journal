const express = require('express');
const router = express.Router();
const journalController = require('../controllers/journal.controller');
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



module.exports = router;