const mongoose = require('mongoose');
require('dotenv').config();

const dbconnection = async () =>{
    const url = process.env.MONGO_URL;
    try {
await mongoose.connect(url)
        console.log('connected successfully to mongo')
    } catch (error) {
        console.error('failed to connect to mongo', error)
    }
}


module.exports = dbconnection;