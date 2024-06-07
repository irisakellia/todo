const mongoose = require('mongoose');

const dbconnection = async () =>{
    try {
await mongoose.connect("mongodb+srv://irisakellia:123@cluster0.jhv2iwc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('connected successfully to mongo')
    } catch (error) {
        console.error('failed to connect to mongo', error)
    }
}


module.exports = dbconnection;