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
                <h1 className='text-6xl Poppins'>Hi, I'm <br/>João Paulo</h1>
                <br />
                <p className='text-2xl pb-3'>Software and Web Developer</p>
                <button className='me--button  bg-neutral-950 border-red-800 border-2 cursor-pointer text-red-700 p-3 rounded-xl'> See more </button>
            </div>
            <div className='me--right w-1/2 flex justify-end items-center max-xl:px-10'>
                <div className='me--img h-full flex items-center w-4/6'>
                    <img src={me.img} alt="" className='w-full rounded-full' />

                </div>
            </div>
        </div>
    </div>
    )
}


    
