const express = require('express')
const {dbConnection} = require("./utils/dbconnection")
const router = require('./routes/routes')
const bodyParser = require('body-parser')
const cors = require('cors')




const app =  express();
const port = 3000 ;

dbConnection();

app.use(cors());
app.use(bodyParser.json())
app.use('/add', router);
app.use('/all',router);





app.listen(3000 , ()=>{
    console.log(`Server running on port ${port}`)
})



