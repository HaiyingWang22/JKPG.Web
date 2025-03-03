const mongoose = require('./database');

const storeSchema = new mongoose.Schema({
    name: String,
    url: String,
    district: String
});

const Store = mongoose.model('Store', storeSchema);// create Schema model for achieve CRUD

module.exports = Store;
