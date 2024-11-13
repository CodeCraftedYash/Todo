import React from 'react'
import Login from './Login/Login'

function Header() {
  return (
    <div className='bg-white w-full min-h-8 flex flex-row items-center justify-start'>
        <div className='mx-4 '>
            About
        </div>
        <h1 className='mx-auto font-bold text-2xl'><span className="text-2xl font-bold">📋</span> 
              Todo
        </h1>
        <Login/>
    </div>
  )
}

export default Header