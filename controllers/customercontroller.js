const customerModels = require('../models/customerModels')

const displayCustomer = async (req, res) => {
    res.json(customerModels.customerData)
}
const recieveCust = async (req, res) => {
    const frontDetail = req.body
    console.log('customer data recieved', frontDetail)
}


module.exports = { displayCustomer, recieveCust }