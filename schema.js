const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contact = new Schema({
    name : String,
    num : Number,
    type:String,
    material : String,
    truck:String,
    location:String
});
module.exports = mongoose.model("mrk", contact);