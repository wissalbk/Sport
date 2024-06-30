const express = require("express"); // import module express
const bodyParser = require("body-parser"); // import module body parser
const mongoose = require("mongoose");//import mongoose module
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');//connect Express with DB
const bcrypt = require("bcrypt");//import bcrypt module
const jwt = require('jsonwebtoken');//import jsonwebtoken module
const session = require('express-session');//import express-session module
const axios = require("axios");//import axios Module
const multer = require("multer");//installer et importer multer :module responsable du upload file PARTIE BE
const path = require("path");//module externe de node :gestion de path coté express

const app = express(); // création app BE app

// bodyParser configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );

    next();
});
//session configuration
const secretKey = 'wissal';
app.use(session({
    secret: secretKey,
}));


//configuration image
// /shortCutPath == backend/images utiliser avec BD
app.use('/shortCutPath', express.static(path.join('backend/images')))
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        if (isValid) {
            cb(null, 'backend/images')
        }
    },
    //nameFile
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-wissal-' + '.' + extension;
        cb(null, imgName);
    }
})


//Models Importation
const Match = require('./models/match');
const match = require("./models/match");
const Team = require('./models/team');
const team = require("./models/team");
const Player = require('./models/player');
const User = require('./models/user');

//static database
let matches = [
    { id: 1, teamOne: 'RMD', teamTwo: 'FCB', scoreOne: 0, scoreTwo: 3 },
    { id: 2, teamOne: 'SEV', teamTwo: 'ATM', scoreOne: 2, scoreTwo: 4 },
    { id: 3, teamOne: 'CIT', teamTwo: 'ARS', scoreOne: 3, scoreTwo: 1 },
    { id: 4, teamOne: 'JUV', teamTwo: 'ROM', scoreOne: 1, scoreTwo: 1 },
]

//Here BL : Add Match
app.post("/api/matches", (req, res) => {
    console.log("Here into BL :Add Match", req.body);
    let matchObj = new Match(req.body);
    matchObj.save();
    console.log(req.body);
    res.json({ message: 'match added' });
});


//Here BL : Get All Match
app.get("/api/matches", (req, res) => {
    Match.find().then((docs) => {
        console.log("here Matches docs :", docs)
        res.json({ matches: docs })
    });

});

//Here BL : Get Match By Id
app.get("/api/matches/:id", (req, res) => {
    console.log("here into BL:Get Match By Id", req.params.id);
    Match.findById(req.params.id).then((doc) => {
        console.log("here Match doc:", doc);
        res.json({ match: doc })
    }
    )
    //  let match = matches.find((item)=>item.id == req.params.id)
    // res.json({match:match})
});


//Here BL :  Delete Match
app.delete("/api/matches/:id", (req, res) => {
    console.log("here into BL:delete Match By Id", req.params.id);
    Match.deleteOne({ _id: req.params.id }).then((deletedResponse) => {
        console.log("Here response after delete Match", deletedResponse);
        if (deletedResponse.deletedCount == 1) {
            res.json({ message: "Success" })
        } else {
            res.json({ message: "Error" })
        }
    });
    // let pos =matches.findIndex((item)=> item.id == req.params.id);
    // matches.splice(pos,1);
    // res.json({message : "matched deleted"})
});


//Here Traitement logique Update Match 
app.put("/api/matches", (req, res) => {
    console.log("here into into BL :edit Match", req.body);
    Match.updateOne({ _id: req.body._id }, req.body).then((updateResponse) => {
        console.log("Here Response", updateResponse);
        if (updateResponse.nModified == 1) {
            res.json({ message: "Edited with Success" });
        } else {
            res.json({ message: "Error" });
        }
    });
    // let index=matches.findIndex((obj)=>obj.id == req.body.id);
    // matches[index]=req.body;
    // res.json({message : "Edited with Success"});
});


/////PLayersServices////


//traitement logique addPlayer
app.post("/api/players", (req, res) => {
    console.log("Here into BL add Player : ", req.body);
    Team.findById(req.body.tId).then((team) => {
        if (!team) {
            res.json({ message: "Team Not Found" });
        } else {
            //Team Founded
            let player = new Player({
                name: req.body.name,
                position: req.body.position,
                number: req.body.number,
                age: req.body.age,
                teamID: team._id    //req.body.id
            });
            player.save((err, doc) => {
                if (err) {
                    res.json({ message: "player not saved" })
                } else {
                    team.playersId.push(doc);
                    team.save();
                    res.json({ message: "player saved with success" })
                }
            });

        }
    })

    // let playerObj = new Player(req.body);
    // playerObj.save();
    // console.log(req.body);
    //  res.json({ message: 'players added' });
});
//Here into BL : get Teams with PLayers
app.get("/api/teamsPlayers", (req, res) => {
    console.log("Here into BL : Get all Teams with Players");
    Team.find().populate("playersId").then((teamDocs) => {
        console.log("here teams :", teamDocs)
        res.json({ teams: teamDocs });
    });

});;

//Here into BL : get PLayers with Team INformation
app.get("/api/playersTeams", (req, res) => {
    console.log("Hereinto BL : Get all PLayers with Team");
    Player.find().populate("teamID").then((playerDocs) => {
        console.log("here players with Team : ", playerDocs);
        res.json({ players: playerDocs });
    })
})





//Here traitement logique All players
app.get("/api/players", (req, res) => {
    Player.find().then((docs) => {
        console.log('Here docs:', docs);
        res.json({ players: docs });
    })
});

//Here BL : Get PlayerById
app.get("/api/players/:id", (req, res) => {
    console.log("here into BL GetPlayerById", req.params.id);
    Player.findById(req.params.id).then((doc) => {
        console.log("here doc :", doc);
        res.json({ player: doc });
    });
});

//Here BL: Delete PLayer
app.delete("/api/players/:id", (req, res) => {
    console.log("Here into BL delete Player :", req.params.id);
    Player.deleteOne({ _id: req.params.id }).then((deletedResponse) => {
        console.log("Here response after delete", deletedResponse);
        if (deletedResponse.deletedCount == 1) {
            res.json({ message: "Success" })
        } else {
            res.json({ message: "Error" })
        }
    });

});


//Here into BL : updatePLayer
app.put("/api/palyers", (req, res) => {
    console.log("Here into BL updatePlayer :", req.body);
    Player.updateOne({ _id: req.body._id }, req.body).then((updatedResponse) => {
        console.log("Here updateResponse :", updatedResponse);
        if (updatedResponse.nModified == 1) {
            res.json({ message: "Edited with Success" });
        } else {
            res.json({ message: "Error" });
        }
    });

});






///TeamService////

//Here BL: add Team
app.post("/api/teams", (req, res) => {
    console.log("here into BL : Add Team", req.body);
    let teamobj = new Team(req.body);
    teamobj.save();
    console.log(req.body);
    res.json({ isAdded: true });
});

//Here BL : Get All Teams
app.get('/api/teams', (req, res) => {
    Team.find().then((docs) => {
        console.log("here docs:", docs);
        res.json({ teams: docs });
    });

});

//Here BL : Get Team ById
app.get('/api/teams/:id', (req, res) => {
    console.log("here into BL Get Team By Id :", req.params.id);
    Team.findById(req.params.id).then((doc) => {
        console.log('Here doc :', doc);
        res.json({ team: doc });
    });
});

//Here BL : Delete Team
app.delete('/api/teams/:id', (req, res) => {
    console.log("here into BL Delete Team By Id :", req.params.id);
    Team.deleteOne({ _id: req.params.id }).then((deletedResponse) => {
        console.log('Here Response :', deletedResponse);
        if (deletedResponse.deletedCount == 1) {
            res.json({ message: "deleted with Success" })
        } else {
            res.json({ message: "Error" })
        }
    });

});

//Here BL : Update Team
app.put('/api/teams', (req, res) => {
    console.log("here into into BL :edit Team", req.body);
    Team.updateOne({ _id: req.body._id }, req.body).then((updateResponse) => {
        console.log("Here Response", updateResponse);
        if (updateResponse.nModified == 1) {
            res.json({ message: "Edited with Success" });
        } else {
            res.json({ message: "Error" });
        }
    });

})
/////UsersService/////

///Here into BL : Signup
// 'img' attribut du FE
app.post("/api/users/signup", multer({ storage: storage }).single('img'), (req, res) => {
    console.log("Here into BL :Add User", req.body);
  //  console.log("Here into BL :Add User", req.file);

    //complexité hash
    bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
        console.log("Here cryted pwd", cryptedPwd);
        req.body.pwd = cryptedPwd;
        req.body.avatar = `http://localhost:3000/shortCutPath/${req.file.filename}`;
        let userObj = new User(req.body);
        userObj.save();
        res.json({ message: 'user added' });
    });

});
//here into BL :LOgin
app.post("/api/users/login", (req, res) => {
    console.log("Here into BL : Login", req.body);
    User.findOne({ email: req.body.email }).then((doc) => {
        console.log("Here doc", doc);
        if (!doc) {
            res.json({ message: 'check your email' });
        } else {
            //doc exist
            bcrypt.compare(req.body.password, doc.pwd).then((pwdResult) => {
                console.log("Here pwdResult", pwdResult);
                if (!pwdResult) {
                    res.json({ message: 'check your Pwd' })
                } else {
                    let userToSend = {
                        role: doc.role,
                        firstName: doc.firstName,
                        lastName: doc.lastName,
                        tel: doc.tel,
                        id: doc._id,
                        avatar: doc.avatar,

                    };
                    //encoder userTosend
                    //sign fonction predefinie de jsonwebtoken
                    //session = 1h
                    const token = jwt.sign(userToSend, secretKey, { expiresIn: '1h' });
                    //token user encoder
                    res.json({ message: "welcome", user: token })
                }
            });

        }
    });
});

//Here into BL : update profile
app.put("/api/users", (req, res) => {
    console.log("Here into BL update profile :", req.body);
    User.findOne({ _id: req.body.userId }).then((doc) => {
        console.log("Here doc profile :", doc);
        if (!doc) {
            res.json({ message: "user not found" })
        } else {
            bcrypt.compare(req.body.oldPwd, doc.pwd).then((pwdResult) => {
                console.log("Here result check pwd", pwdResult);
                if (!pwdResult) {
                    res.json({ message: "check your old password" })
                } else {
                    bcrypt.hash(req.body.newPwd, 10).then((cryptedPwd) => {
                        console.log("here cryptedPwd :", cryptedPwd);
                        let newObj = { tel: req.body.tel, pwd: cryptedPwd };
                        User.updateOne({ _id: req.body.userId }, newObj).then((editResult) => {
                            console.log("here edit result : ", editResult);
                            if (editResult.nModified == 1) {
                                res.json({ message: "edited with success" })
                            } else {
                                res.json({ message: "error" })
                            }
                        })
                    })
                }
            })
        }

    })

});
//Here into BL : search weather
app.post("/api/weather", (req, res) => {
    console.log("Here into BL : search weather", req.body);
    //key copier de https://home.openweathermap.org/api_keys
    let key = "ad3b2b65d31b646aeb00e125474465c8";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${key}`;
    axios.get(apiURL).then((apiResponse) => {
        console.log("here response from API", apiResponse.data);
        let weatherResponse = {
            temp: apiResponse.data.main.temp,
            humidity: apiResponse.data.main.humidity,
            pressure: apiResponse.data.main.pressure,
            speed: apiResponse.data.wind.speed,
            description: apiResponse.data.weather[0].description,
        }
        res.json({ apiRes: weatherResponse });
    })


})

module.exports = app; // make app exportable