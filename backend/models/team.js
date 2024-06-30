const mongoose = require("mongoose");//import mongoose module
//create team Module
const teamSchema = mongoose.Schema({
    name : String,
    owner : String,
    fondation : Number,
    playersId : [ //tableau d'Id
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Player"
    }       
    ]
});
//create model Name and affect to scheme
const team = mongoose.model('Team',teamSchema);
//make team exportable
module.exports= team;