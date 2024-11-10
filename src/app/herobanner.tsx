"use client";
import React from 'react'
import {useEffect , useState} from 'react'

const texts =
[
    `"Personalize Your Tote Today"`,
    `From beach days to grocery runs, our totes do it all!`,
    `#Your Tote, Your Story!`
];
function Herobanner (): React.ReactElement{
    const[ index , setIndex] = useState<number>(0)

useEffect(() => {
    const timeoutId = setTimeout(() => {
        setIndex((prevIndex : number) => (prevIndex +1) % texts.length);
    },3000)
    return() => clearTimeout(timeoutId);},
    [index]);

    const next = ()=>{
        setIndex((prevIndex :number)=>(prevIndex + 1) % texts.length)
    }
    const prev =()=> {
        setIndex((prevIndex : number) => (prevIndex-1+texts.length) % texts.length)
    }

    return(
        <div className='relative flex items-center justify-center hero-bg text-white h-12'> 
              <h1 className =" text-center text-2xl hero-font transition-transform duration-500 hover:scale-105">{texts[index]}</h1>
            {/* <div className='flex justify-between text-center'>
                <button onClick={prev} className='absolute left-5  w-16 top-1/2 transform -translate-y-1/2 bg-lime-200  p-1 rounded-full border-green-950 border-2 hover:bg-green-950'><strong> &lt;</strong>   </button>
                <button onClick={next} className='absolute right-5 w-16 top-1/2 transform -translate-y-1/2 bg-lime-200 p-1 rounded-full border-green-950 border-2 hover:bg-green-950'><strong>   &gt;</strong></button>
            </div> */}
        </div>
    )}
export default Herobanner;
