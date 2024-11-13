import React from 'react'
import { motion } from "framer-motion"
import useRefConstrain from '../context/refContext'
function Card({id,title}) {
  const [isDragable , setIsDragable ] = React.useState(false)
  const refConstrain = useRefConstrain();

  const handleDone = () =>{
    console.log("Clicked Done")
  }
  //absolute bottom-0 left-[50%] translate-x-[-50%]
  
  return (
    <motion.div
    whileDrag={{ scale: 1.2 }}
    dragConstraints={refConstrain}
    drag={isDragable}
    className='min-w-32 min-h-32 bg-slate-100/80 mx-auto border rounded-xl break-words px-4 my-10 relative'>

        <h1 className='text-zinc-800 text-4xl text-center py-4 font-extrabold'>{title}
        </h1>
        <div className='flex flex-row justify-between'>

        <button className='text-black border p-2 rounded-lg bg-green-600  mb-1'
        onClick={() => setIsDragable(!isDragable)}
        >
          Drag
        </button>

        <button className='text-black border p-2 rounded-lg bg-green-600  mb-1'
        onClick={handleDone}
        >
          Done
        </button>
          </div> 
      

    </motion.div>
  )
}

export default Card