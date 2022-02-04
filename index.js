const mongoose = require('mongoose')
const express = require('express')
const app = express();
require('./model/studinfo')
require('./model/studresult')   
const bodyParser =require('body-parser')
const router = require('./router/router')


mongoose.connect("mongodb+srv://uviroja:123@cluster0.euzzq.mongodb.net/nodelive?retryWrites=true&w=majority").then(() => {
    console.log("Connected to MongoDB");
  }).catch((err) => {
    console.log(err);
  });
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(router);
    

    app.listen((process.env.PORT||3000),()=>{
        console.log('server started')
    });

