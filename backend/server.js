
const express = require('express');
const cors = require('cors');
const dbconnection = require('./utils/dbconnection')
const router = require('./routes/routes.js')

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', router);



dbconnection();


app.listen(3000 , ()=>{
    console.log(`the app is running on port ${3000 }`)
})




