const mongoose = require('mongoose')
const shortid = require('shortid');

const accountSchema = new mongoose.Schema({
    userid:  { type: String, default: shortid.generate() },
    email: String,
    password: String,
    isSeller: Boolean,
    shopName: String,
});

const Account = mongoose.model('Accounts', accountSchema)

module.exports = Account;