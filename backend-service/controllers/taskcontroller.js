// const Task = require('../models/task.model')

// const addTask = async(req,res) =>{
//     try {
//         const {taskName} = req.body;

//         if(taskName == null || !taskName){
//           res.status(400).json({
//             message : "The task name is required"
//           })
//           return
//         }

//         const task = new Task({
//             taskName
//         });

//         await task.save();
//         res.status(200).json({success:true, message:"New case added successfully"})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({success:false, message:"Internal server error"})
//     }
// }

// const getTasks = async(req,res)=>{

//     try {
//      const tasks = await Task.find()
//      if(!tasks){
//         return res.status(400).json({success:false, message:"no tasks found in the database"})
//      }
    
//      return res.status(200).json({tasks});
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({success:false, message:"internal server error"})
//     }

// }

// const getTask = async(req,res)=>{

//     try {
//         const taskId = req.params.id;

//         if(taskId == null || !taskId){
//             res.status(400).json({
//                 message : "The task id is required"
//             })
//         }

//         const foundTask = await Task.findById(taskId);

//         if (!foundTask){
//             return res.status(404).json({message:"the case with id not found "});
//         }



//         res.status(200).json({task:foundTask});

//     } catch (error) {
        
//         return res.status(500).json({message:"internal server error"})
//     }
// }

// const deleteTask = async (req,res)=>{
//     try {
//         const taskId  = req.params.id;

//         const deleteTask = await Task.findByIdAndDelete(taskId);
        
//         if (!deleteTask){
//             return res.status(400).json({message: "deleted task not matching the id"})
//         }

//         return res.status(200).json({message:"the task was deleted"})
//     } catch (error) {

//         return res.status(500).json("internal server error")
        


//     }
// }


// const updateTask = async (req, res) => {
//     try {
//         const taskId = req.params.id;
        
//         const updateFields = req.body;

//         if(taskId == null || !taskId || !updateFields ){
//             res.status(400).json({
//                 message : 'The id of the task and the new body are required'
//             })
//         }

//         const updatedTask = await Task.findByIdAndUpdate(taskId, updateFields, { new: true });

//         if (!updatedTask) {
//             return res.status(400).json({ success: false, message: "Unable to edit" });
//         }

//         return res.status(200).json({ success: true, message: "Successfully edited", data: updatedTask });
        
//     } catch (error) {
//         return res.status(500).json({ message: "Internal server error" });
//     }
// };


// module.exports = {addTask,getTask,getTasks,deleteTask,updateTask}


const Task = require('../models/task.model');

const addTask = async (req, res) => {
  try {
    const { taskName } = req.body;

    if (!taskName) {
      return res.status(400).json({ success: false, message: "Task name is required" });
    }

    const task = new Task({ taskName });
    await task.save();

    console.log(task);
    return res.status(200).json({ success: true, message: "Task has been successfully added" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = { addTask };



