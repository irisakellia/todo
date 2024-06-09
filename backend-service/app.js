const express = require('express')
const dbConnection = require("./utils/dbconnection")
require('dotenv').config();
const taskRoute = require("./routes/routes")


const app = new express();
const port = process.env.PORT;

dbConnection();

app.get('/'  , (req , res)=>{
       res.send("Hello World")
})

app.use('/api/v1/' , taskRoute)

app.listen(port || 3000 , ()=>{
    console.log(`Server Started at port ${port || 3000}`)
})

