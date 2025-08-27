import { useProgress, Html } from '@react-three/drei';
import { delay } from 'framer-motion';
import React, { useState } from 'react';

type Props ={
    children?: React.ReactNode,
    delay: number,
    transition?: number
}

export const Loader = ({children,delay,transition}: Props) =>{
    
    const [opacity,setOpacity] = useState(100)

    const afterdelay = () => {
        setTimeout(()=>{
            const animate = setInterval(()=> setOpacity(prev=> prev > 0? prev-1 : (clearInterval(animate),prev)),(transition? transition : 70))
        },delay)
    }
    afterdelay()

    return (
        <div className='relative'>
            <div className={`absolute inset-0 bg-neutral-800 flex justify-center items-center Poppins ${opacity === 0? "hidden" : ""}`} style={{opacity:opacity/100, zIndex:1}}>
            <h1>Loading...</h1>
            </div>
            <div></div>
            {children}
        </div>
    )
}