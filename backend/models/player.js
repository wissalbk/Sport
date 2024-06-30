const mongoose = require("mongoose");//import mongoose module
const { isVariableDeclaration } = require("typescript");
//create team Module
const teamSchema = mongoose.Schema({
    name : String,
    position : String,
    number : Number,
    age: Number,
    teamID:{// un element
        type:mongoose.Schema.Types.ObjectId,
        ref:"Team"
    }
});
//create model Name and affect to scheme
const player = mongoose.model('Player',teamSchema);
//make team exportable
module.exports= player;