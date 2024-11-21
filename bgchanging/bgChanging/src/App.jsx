import React from 'react'
import { useState } from 'react'

export default function App() {
 
  const [color,setcolor] = useState("black")

  return (
    <div className='h-screen w-screen ' style={{background:color}}>

         <div className='bg-white fixed flex  flex-wrap justify-center  m-3 gap-3 p-3 rounded-3xl inset-x-0 bottom-12'>

             <button className=' p-2 rounded-full text-white' style={{background:"red"}}  onClick={()=>setcolor("red")}  >red</button>
             <button className=' p-2 rounded-full text-white' style={{background:"green"}}  onClick={()=>setcolor("green")}  >green</button>
             <button className=' p-2 rounded-full text-white' style={{background:"blue"}}  onClick={()=>setcolor("blue")}  >blue</button>
             <button className=' p-2 rounded-full text-white' style={{background:"gray"}}  onClick={()=>setcolor("white")}  >white</button>
          </div>      
    </div>
  )
}
