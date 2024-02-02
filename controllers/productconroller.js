
const productModels = require('../models/productModels')


const displayProduct = async (req, res) => {
    res.json(productModels.productData)
}
const recieveProd = async (req, res) => {
    const frontDetail = req.body
    console.log('product data recieved', frontDetail)
}


module.exports = { displayProduct, recieveProd }