"use client"
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <div id="canvas-container">
      <Canvas />
    </div>
  )
}



import * as THREE from "three"
import React, { useEffect, useRef, useState } from "react"
import { useGLTF, useAnimations, PerspectiveCamera, Stars, Sphere } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Me } from '@/Areas/Me'


export const HomeContent = () =>{

    const [user,setUser] = useState("guest")

    return (
        <div className="Home pt-10">
            <div className="wrapper">
                <div className="Home__content">
                    <div className="Home__welcome Poppins fade-in"><h1 className="text-center text-3xl"> Welcome {user}</h1></div>
                    <div className="Home__Introduction Poppins fade-in-delay2 opacity-0 pt-10"> <h2 className="text-center text-lg"> My name is João Paulo and... </h2> </div>
                </div>
                <Me/>
            </div>
        </div>
    )

}