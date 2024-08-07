import React, { useState, useEffect } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

//all works
//but the edit is a prompt
//gotta change that later

const Index = () => {
  const [data, setData] = useState({ task: '' });
  const [tasks, setTasks] = useState([]);
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: data.task }),
      });

      const result = await response.json();
      setResult(result.message);
      if (response.ok) {
        fetchTasks(); 
      }
    } catch (error) {
      console.error("Failed to add a new task", error);
      setResult("Failed to add a new task");
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/tasks");
      const result = await response.json();
      if (response.ok) {
        setTasks(result.tasks);
      }
    } catch (error) {
      console.error("Failed to fetch tasks", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);


  const handleDelete = async(id)=>{
    try {
      const response = await fetch(`http://localhost:3000/api/remove/${id}`,{
        method:"DELETE",

      });
      const result = await response.json();
      setResult(result.message);
      if(response.ok){
        fetchTasks();
      }
      
    } catch (error) {
     console.error("failed to delete task",error);
     setResult("failed to delete"); 
    }

  }

  const editTask = async (id) => {
    const newTaskName = prompt("Enter the new task name:"); 
    if (!newTaskName) return;
  
    try {
      const response = await fetch(`http://localhost:3000/api/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: newTaskName }),
      });
      const result = await response.json();
      if (response.ok) {
        fetchTasks();
      } else {
        setResult(result.message);
      }
    } catch (error) {
      console.error("failed to update task", error);
      setResult("failed to update my task");
    }
  };
  
   


  
  return (
    <div className='grid grid-cols-2'>
      <section>
      <form onSubmit={handleSubmit}>
        <div className='bg-black h-[1000px]'>
          <h1 className='text-white font-serif pt-40 pl-96 font-medium'>
         ANYTHING YOU WANNA DO , PLEASE DO SHARE
          </h1>
          <input
            type='text'
            name='task'
            placeholder='What do you want to do?'
            className='ml-96 mt-20 p-4 py-2 rounded-lg'
            value={data.task}
            onChange={handleChange}
          />
          <button type='submit' className='text-center text-red-700 ml-4 border border-white rounded-lg bg-black p-2 py-px'>
            Add task
          </button>
        </div>
      </form>
      </section>

      <section className='ml-80 pt-20 bg-white pl-10 rounded-xl h-auto pr-10'>
      <div className='task-list'>
        <h2 className='text-black font-serif  font-medium'>Your Tasks:</h2>
        <ul className=''>
          {tasks.map((task) => (
            <li key={task._id} className='text-black mt-2'>
              {task.taskName}
              <button onClick={()=> handleDelete(task._id)}>
                <FaTrash className='text-black ml-4'/>
              </button>
              <button onClick={()=>editTask(task._id)}>
              <FaEdit className='ml-2 '/>
              </button>
            </li>
          ))}
        </ul>
      </div>
      </section>
    </div>
  );
};

export default Index;
