const mongoose = require("mongoose");//import mongoose module
const userSchema = mongoose.Schema({
firstName: String,
lastName : String,
email : String,
pwd : String,
tel : Number,
role : String,
avatar : String
});
//create model Name and affect to scheme
const user = mongoose.model('User',userSchema);
//make team exportable
module.exports= user;
