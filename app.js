require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./Router/route.js');
const mongoose = require('mongoose');



const urlencoded = bodyParser.urlencoded({extended:false});


const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)
// app.use(urlencoded);
// app.use(bodyParser.json());

app.set('view engine', 'ejs');


mongoURI = process.env.Database_url;

const conn = async () => {mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    console.log("MongoDB connected")
).catch((e)=>{
    console.log(e)
})
}

conn();










app.listen(port,()=>{
    console.log(`runing at http://localhost:${port}`);
})