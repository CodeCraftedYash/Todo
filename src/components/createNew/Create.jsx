import React, { useState } from 'react'


function Create({onCreate}) {
  const [ title , setTitle ] = useState('');

  const handleSubmit = (e) =>{
    console.log("submited succefully");
    e.preventDefault();
    if(title.trim()){
      onCreate(title);
      setTitle('');  
    }
  
  }
  return (
    <form onSubmit={handleSubmit}
    className='border flex justify-between flex-col text-white text-2xl w-[18rem] sm:w-[30rem] min-h-52 p-4 bg-sky-600 rounded-lg items-center'>
        <label className='w-64 sm:w-96 text-center py-2 border rounded-lg'>Create Todo</label>

        <input type='text' placeholder='Enter Task'
        className='text-black w-64 sm:w-96 text-center rounded-lg h-12'
        onChange={(e)=> setTitle(e.target.value)}
        ></input>

        <button type='submit' className='w-20 bg-green-500 p-2 rounded-lg'>
            Create
        </button>

    </form>
  )
}

export default Create