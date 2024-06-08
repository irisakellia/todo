import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Index = () => {
  
  const [value, setValue] = useState({
    
  })

  const handleChange = (e)=>{
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const addTask = await axios.post('http://localhost:3000/addTask');
      const response = addTask.data;
      if(response) {
        console.log(response);
      }
      if(addTask){
        window.location.href = '/task'
      }
      
    } catch (error) {
      console.log(error);
    }
  }
 

  return (
    <form onSubmit={handleSubmit}>
      <div className='bg-black h-full'>
        <input
          type='text'
          placeholder='What do you want to do?'
          className='ml-10 mt-10 p-4 py-2 rounded-lg'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='text-black ml-4 border border-red-700 rounded-lg bg-red-700 p-2 py-px'>
          Add task
        </button>
      </div>
    </form>
  );
};

export default Index;
