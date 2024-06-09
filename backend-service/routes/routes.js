const express = require('express');
const taskcontroller = require('../controllers/taskcontroller')


const tasksrouter = express.Router();

tasksrouter.post('/addTask', taskcontroller.addTask);
tasksrouter.get('/tasks', taskcontroller.getTasks);
tasksrouter.get('/task/:id', taskcontroller.getTask);
tasksrouter.delete('/task/:id', taskcontroller.deleteTask);
tasksrouter.put('/task/:id',taskcontroller.updateTask);


module.exports = tasksrouter ;