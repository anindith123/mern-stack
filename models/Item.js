const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name : {
        type : String,
        require : true
    },
    date : {
        type : Date,
        default : Date.now
    }
});

Item = mongoose.model('item',ItemSchema);
module.exports = Item