const express = require('express')
const app = express()
const mongoose = require('mongoose')
const  contactRouters =require('./routers/contact')
const bodyParser = require('body-parser')

const serverconnected = async()=> {
    try {
       await mongoose.connect('mongodb+srv://sbs123:Suraj123@sbs-contact.hpbht.mongodb.net/?retryWrites=true&w=majority&appName=sbs-contact')
        console.log("connect with database")
    }
    catch (err) {
   console.log(err)
   console.log('something is worng')

    }
}
serverconnected();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/contact',contactRouters)




module.exports = app;