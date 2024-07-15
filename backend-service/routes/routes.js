const express  = require('express');
const addcontroller = require('../controllers/taskcontroller')

const router = express.Router();

router.post('/task',addcontroller.addTask);



module.exports = router ; 







