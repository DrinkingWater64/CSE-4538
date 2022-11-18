const data = require('../Model/users-text.json')
const rec = require('../R.json');
const fs = require('fs');

// console.log(data);

const track ={
    sender: "",
    reciever: "",
    text: ""
}

const tracks = rec; 

const getHome = (req, res) => {
    res.render('home', {users: data});
}

function sendText(req, res) {

    tracks.push({sender:req.body.sender, reciever:req.body.reciever, text:req.body.text});
    
    console.log(tracks);
    makeRecored(tracks);
    res.redirect('/');
}

makeRecored = (tracks) => {
    const Rjson = JSON.stringify(tracks);

    console.log(Rjson);
    fs.writeFile('R.json', Rjson, (err) => {
        if(err){
            console.log(err);
        }
    });

}

module.exports = {getHome , sendText, tracks};