const mongoose = require('mongoose');//import mongoose module
//create match schema (attribut with types)
const matchSchema = mongoose.Schema({
    scoreOne:Number,
    scoreTwo:Number,
    teamOne:String,
    teamTwo:String,
});
//create model Name and affect to schema
const match = mongoose.model('Match',matchSchema);
//make match exportable
module.exports = match;
