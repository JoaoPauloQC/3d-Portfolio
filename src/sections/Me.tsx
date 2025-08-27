import { createRoot } from 'react-dom/client'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import footballtexture from '../../public/assets/textures/football-texture.avif'
import {  Environment, OrbitControls } from '@react-three/drei'
import { me } from "@/data/data"

export const Me = () => {

    

    return(
    <div className='wrapper'>    
        <div className='me flex justify-center Poppins py-50 h-screen'>
            <div className='me--left flex flex-col items-center justify-center max-xl:px-10'>
                <h1 className='text-6xl Poppins'>Hi, I'm</h1>
                <p className='text-6xl Poppins'>Joao Paulo</p>
                
                <p className='text-2xl pb-5 pt-2'>Software and Web Developer</p>
                <button className='me--button  bg-neutral-950 border-neutral-900 border-2 hover:border-red-500 transition-all duration-200 cursor-pointer text-neutral-100 p-3 rounded-xl'> See more </button>
            </div>
            <div className='me--right w-1/2 flex justify-end items-center max-xl:px-10'>
                <div className='me--img h-full flex items-center  w-4/6'>
                    <img src={me.img} alt="" className='w-full border-2 border-neutral-700 rounded-full' />

                </div>
            </div>
        </div>
    </div>
    )
}


    
