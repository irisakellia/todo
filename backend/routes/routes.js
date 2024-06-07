const express = require('express');
const taskcontroller = require('../controllers/taskcontroller')


const router = express.Router();

router.post('/addTask', taskcontroller.addTask);
router.get('/tasks', taskcontroller.getTasks);
router.get('/task/:id', taskcontroller.getTask);
router.delete('/task/:id', taskcontroller.deleteTask);
router.put('/task/:id',taskcontroller.updateTask);



module.exports = router ;