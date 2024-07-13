import React, { useState } from 'react';
import axios from 'axios';

const Index = () => {
  
  const [data, setData] = useState("")

  // const handleChange = (e)=>{
  //   setValue({
  //     ...value,
  //     [e.target.name]: e.target.value,
  //   })
  // }
  const handleSubmit = async (e) =>{
    e.preventDefault();
   try {
    const response = await fetch("http://localhost:3000/add/task",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      }
     body:JSON.stringify(data),
    }
  
  );

  const result = await response.json();
  console.log(result)

    
   } catch (error) {
    throw new Error("failed to add a new task")
   }
 

  return (
    <form onSubmit={handleSubmit}>
      <div className='bg-black h-[1000px]'>
        <h1 className='text-white font-serif pt-40 pl-96 font-medium'>ANYTHING YOU WANNA DO PLEASE SHARE</h1>
        <input
          type='text'
          placeholder='What do you want to do?'
          className='ml-96 mt-20 p-4 py-2 rounded-lg '
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button value={data.task}></button>
        <button type='submit' className=' text-center text-red-700  ml-4 border border-white rounded-lg bg-black p-2 py-px'>
          Add task
        </button>
      </div>
    </form>
  );
};

export default Index;
