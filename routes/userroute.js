const express = require('express')
const router = express.Router()
const userController = require('../controllers/usercontroller')


router.route('/userDetails').get(userController.displayUser)
router.route('/userDetails').post(userController.recieveUser)



module.exports = router