const express  = require('express');
const addcontroller = require('../controllers/taskcontroller')

const router = express.Router();

router.post('/add',addcontroller.addTask);



module.exports = router ; 

