const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home.controller');

//const validatorHandler = require(`../middlewares/validator.handler`)


router.get('/',
homeController.getHome
)
router.get('/spiritual',
homeController.getSpiritual
)
router.get('/joy',
homeController.getJoy
)
router.get('/normal',
homeController.getNormal
)
router.get('/learned',
homeController.getLearned
)
router.get('/sad',
homeController.getSad
)
    
module.exports = router;