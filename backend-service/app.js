const express = require('express')
const {dbConnection} = require("./utils/dbconnection")
const router = require('./routes/routes')
const bodyParser = require('body-parser')




const app =  express();
const port = 3000 ;

dbConnection();

app.use(bodyParser.json())
app.use('/task', router);





app.listen(3000 , ()=>{
    console.log(`Server running on port ${port}`)
})



