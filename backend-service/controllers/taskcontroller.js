const Task = require('../models/task.model');

const addTask = async (req, res) => {
  try {
    const { task } = req.body;

    if (!task) {
      return res.status(400).json({ success: false, message: "Task name is required" });
    }

    const taskEntry = new Task({ taskName: task });
    await taskEntry.save();

    console.log('Saved Task:', taskEntry);
    return res.status(200).json({ success: true, message: `${task} ` });

  } catch (error) {
    console.error('Error adding task:', error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = { addTask };
