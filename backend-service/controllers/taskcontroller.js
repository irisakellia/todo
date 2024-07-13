const addTask = async (req, res) => {
  try {
    console.log('Request Body:', req.body); // Log the request body

    const { taskName } = req.body;

    if (!taskName) {
      return res.status(400).json({ success: false, message: "Task name is required" });
    }

    const task = new Task({ taskName });
    await task.save();

    console.log('Saved Task:', task);
    return res.status(200).json({ success: true, message: "Task has been successfully added", task });

  } catch (error) {
    console.error('Error adding task:', error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};


module.exports = {addTask}