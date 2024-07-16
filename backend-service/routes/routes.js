const express  = require('express');
const {addTask,getTasks,deleteTask} = require('../controllers/taskcontroller')

const router = express.Router();

router.post('/task',addTask);
router.get('/tasks',getTasks);
router.delete('/task/:id',deleteTask);



module.exports = router ; 







