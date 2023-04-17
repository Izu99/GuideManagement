const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

//const dotenv = require('dotenv')
const app = express()
//require("dotenv").config()

//const PORT = process.env.PORT || 8070
const PORT = 8090


app.use(cors())
app.use(bodyParser.json())

//const URL = process.env.MONGODB_URL
const URL= 'mongodb+srv://sithmi:sithmi@cluster0.mpkuvfy.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URL,{
});

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log('Mongo db connection success ! ')
})

// const TargetRouter = require ("./routes/targets.js");
const guideRouter = require ("./routes/guides.js");
const femaleGuideRouter = require ("./routes/femaleGuides.js");
app.use("/guide",guideRouter)
app.use("/femaleGuide",femaleGuideRouter)




app.listen(PORT,()=>{
    console.log('Server is up and running')
})