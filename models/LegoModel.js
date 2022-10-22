const mongoose = require("mongoose")

var LegoSchema = new mongoose.Schema({
    name: String,
    status: String,
    origin: String,
    image: String,
    price: String,
    material: String

})

var LegoModel = mongoose.model('lego', LegoSchema, 'lego')
module.exports = LegoModel