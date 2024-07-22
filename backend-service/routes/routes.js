
const express = require('express');
const { addTask, getTasks, deleteTask, updateTask } = require('../controllers/taskcontroller');

const router = express.Router();

router.post('/task', addTask);
router.get('/tasks', getTasks);
router.delete('/remove/:id', deleteTask);
router.put('/update/:id', updateTask);

module.exports = router;
