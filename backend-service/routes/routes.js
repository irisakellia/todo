const express  = require('express');
const addcontroller = require('../controllers/taskcontroller')

const router = express.Router();

router.post('/task',addcontroller.addTask);
router.get('/tasks',addcontroller.getTasks);
router.delete('/task/:id',addcontroller.deleteTask);



module.exports = router ; 







