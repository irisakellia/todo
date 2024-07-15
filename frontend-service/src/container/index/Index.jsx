import React, { useState, useEffect } from 'react';

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
      const response = await fetch("http://localhost:3000/task/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ taskName: data.task }), // Ensure the task object matches backend expectation
      });

      const result = await response.json();
      setResult(result.message);
      if (response.ok) {
        fetchTasks();  // Fetch tasks after adding a new one
      }
    } catch (error) {
      console.error("Failed to add a new task", error);
      setResult("Failed to add a new task");
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:3000/task/all");
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='bg-black h-[1000px]'>
          <h1 className='text-white font-serif pt-40 pl-96 font-medium'>
            ANYTHING YOU WANNA DO PLEASE SHARE
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
          {result && (
            <p className='text-black bg-white p-2 py-2 w-80 ml-96 mt-10 rounded-xl'>{result}</p>
          )}
        </div>
      </form>
      <div className='task-list'>
        <h2 className='text-white font-serif pt-10 pl-96 font-medium'>Your Tasks:</h2>
        <ul className='ml-96 mt-4'>
          {tasks.map((task) => (
            <li key={task._id} className='text-white'>
              {task.taskName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
