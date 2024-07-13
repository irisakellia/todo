const express  = require('express');
const addcontroller = require('../controllers/taskcontroller.ts')

const router = express.Router();

router.post('/add',addcontroller.addTask);

module.exports = router ; 