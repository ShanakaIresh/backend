const express = require('express')
const router = express.Router()
const productController = require('../controllers/productconroller')

router.route('/productDetails').get(productController.displayProduct)
router.route('/productDetails').post(productController.recieveProd)



module.exports = router