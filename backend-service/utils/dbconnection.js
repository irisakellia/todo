const mongoose = require('mongoose')

const uri = 'mongodb+srv://irisakellia:123@cluster0.jhv2iwc.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0'

const dbConnection = ()=>{

mongoose.connect(uri);

mongoose.connection.on("connected",()=>{
    console.log("connected successfully to mongodb");
})

mongoose.connection.on("error",()=>{
    console.error("error.message");
})

mongoose.connection.on("disconnected",()=>{
    console.log("A disconnection from the database ")
})

}

module.exports ={dbConnection}
