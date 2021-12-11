const mongoose = require('mongoose')
const shortid = require('shortid');

const itemSchema = new mongoose.Schema({
    itemid: { type: String, default: shortid.generate() },
    shopid: String,
    shopname: String,
    img: String,
    name: String,
    type: String,
    price: Number,
    stock: Number,
});

const Item = mongoose.model('Items', itemSchema)

module.exports = Item;