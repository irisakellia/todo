
const Task = require('../models/task.model')

const addTask = async (req, res) => {
  try {
     const { taskName } = req.body;

    if (!taskName) {
      return res.status(400).json({ success: false, message: "Task name is required" });
    }

    const task = new Task({ taskName });
    await task.save();

    console.log('Saved Task:', task);
    return res.status(200).json({ success: true, message: `${taskName} has been successfully added`});

  } catch (error) {
    console.error('Error adding task:', error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};


module.exports = {addTask}