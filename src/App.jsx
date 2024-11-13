import { useEffect, useRef, useState } from 'react'
import './App.css'
import { motion } from "framer-motion"
import Card from './components/Card'
import backgroundImg from './assets/background.jpg'
import Header from './components/Header'
import Create from './components/createNew/Create'
import { RefProvider } from './context/refContext'
function App() {
   //link to image : https://drive.google.com/file/d/1HLDm5aBxHmCjZbNIEiNjVR2GB2szVIpn/view?usp=drive_link
   const [isVisible,setIsVisible]=useState(false);

   //Ref for drag constraint
   const refConstrain = useRef(null);

   const[cards,setCards] = useState([]);

   /* //adding new cards
   const [ cards , setCards ] = useState([]);
   useEffect(
      ()=>{
            // at each iteration i will send a new card to the cards array ,
            setCards((prevCard)=>(...prevCard,))
   },[])  */

   //Create button Toggle
   const handleCreate = () =>{
      setIsVisible(!isVisible);
         
   }

   //add new card with title
   const handleAddCard = (title) => {
      setCards((prevCards) => [...prevCards, { id: Date.now(), title }]);
      setIsVisible(false);  // Close modal after adding
   };
  
  return (
   
            <RefProvider value={refConstrain}>

            <div 
            ref={refConstrain}
            className="w-full min-h-screen  relative bg-slate-950"
           /*  style={bg-repeat bg-50% sm:bg-20%{backgroundImage: `url(${backgroundImg})`}} */>
   
   
               

               <button className='fixed h-12 text-base bg-green-500 rounded-full p-2 top-10 right-1 z-20 text-white'
               onClick={handleCreate}
               >
                  Create new
               </button>

               <div className={`fixed z-20 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] ${isVisible ? "block" : "hidden"}`}>
               <Create onCreate={handleAddCard} />
               </div>

   <Header />
   <div className='flex flex-col sm:flex-row gap-20 items-center border-black flex-wrap items'>
                           {/*cards goes here*/}
      {cards.map((card)=>(
         <Card key={card.id} title={card.title} />
      ))}
   
   </div>

   
   
    {/* <h1 className='z-[-2] text-[13vw] leading-none tracking-tighter absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-black drop-shadow-3xl'>Todos.</h1> */}
  
      
 
       
      
     </div>
     </RefProvider>
    


  )
}

export default App
