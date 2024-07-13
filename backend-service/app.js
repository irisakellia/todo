const express = require('express')
const {dbConnection} = require("./utils/dbconnection")
const addRoute = require('./routes/routes')



const app =  express();
const port = 3000 ;

dbConnection();
app.use('/task',addRoute);



app.listen(3000 , ()=>{
    console.log(`Server running on port ${port}`)
})

