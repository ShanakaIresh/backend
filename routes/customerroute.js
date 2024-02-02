const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customercontroller')

router.route('/customerDetails').get(customerController.displayCustomer)
router.route('/customerDetails').post(customerController.recieveCust)



module.exports = router