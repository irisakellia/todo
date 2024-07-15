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

const getTasks = async(req,res)=>{

  try {

    const tasks = await Task.find();

    if(tasks.length == 0){

      return res.status(400).json({success:false, message:"no task was found in the database"});

    }else{

      return res.status(200).json({success:true, tasks})
    }
    
  } catch (error) {
    console.error("cannot get tasks",error);
    res.status(500).json({success:false, message:"Internal server error"})
  }

  
}

module.exports = { addTask,getTasks };
