const data = require('../Model/users-text.json')
const rec = require('../R.json');
const fs = require('fs');


const tracks = rec; 

const getHome = (req, res) => {
    res.render('home', {users: data});
}

const sendText = (req, res) => {

    tracks.push({sender:req.body.sender, reciever:req.body.reciever, text:req.body.text});
    
    console.log(tracks);
    makeRecored(tracks);
    res.redirect('/');
}


const showText = (req, res) => {
    let r =  req.body.reciever;
    // res.redirect("/user");
    res.render('profile', {users: data, texts: tracks, rec: r});
}

const viewProfile = (req, res) => {
    res.render('profile', {users: data, texts: tracks, rec: 'null'});
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

module.exports = {getHome , sendText, viewProfile, showText};