"use client"
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { motion } from "framer-motion"

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
import { Me } from './Me'
import StarsCanvas from '@/components/Stars'
import { Loader } from '@/components/Loader'
import { BgOnSee } from '@/components/BackgroundOnSee'
import { PhoneContext } from '@/components/PhoneContext'


export const HomeContent = () =>{

    const [user,setUser] = useState("guest")

    return (
      <>
      <Loader delay={5}>
          <div className="Home relative pt-10">
          
          <Me/>
          <StarsCanvas></StarsCanvas>
        </div>
      </Loader>
      <BgOnSee>
        <PhoneContext></PhoneContext>
      </BgOnSee>
      </>

    )

}