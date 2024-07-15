import React, { useEffect, useState } from 'react';

const Index = () => {
  const [data, setData] = useState({
    task: '',
  });
  const [result, setResult] = useState('');
  const [task, setTask] = useState([]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/add/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setResult(result.message); 
      if(response.ok){
        fetchTasks();
      } 
    } catch (error) {
      console.error("Failed to add a new task");
      setResult("Failed to add a new task");
    }
  };

  const fetchTasks = async()=>{

    try {

      const response = await fetch("http://localhost:3000/all/tasks");
      
      const result = await response.json();

      if(response.ok){
        setTasks(result.tasks);
      }
      
    } catch (error) {
      console.error("failed to fetch tasks", error)
    }
  };

  useEffect(()=>{

    fetchTasks();
  },[])

  return (
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
        {result
         && (
          <p className='text-black bg-white p-2 py-2 w-80 ml-96 mt-10 rounded-xl'>{result}</p>
        )}
      </div>
    </form>
  );
};

export default Index;
