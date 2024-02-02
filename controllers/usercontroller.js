const userModels = require('../models/userModels')

const displayUser = async (req, res) => {
    res.json(userModels.userDetails)
}

const recieveUser = async (req, res) => {
    const frontDetail = req.body
    console.log('user data recieved', frontDetail)
}


module.exports = { displayUser, recieveUser }