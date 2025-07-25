import { useGLTF } from "@react-three/drei"
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import footballtexture from '../../public/assets/textures/football-texture.avif'
import * as THREE from 'three'
import { Environment, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { group } from "console"


export const Shoes = () =>{

    return (

        <div className='pt-24 gap-20 home__card  flex items-center'>
                <div className='Soccer__left home__card__left  rounded-2xl'>    
                    <Canvas camera={{position: [0,0,4.5],fov: 50}} className='rounded-2xl w-full h-full'>
                        
                            <Shoe/>
                      
                        <Environment preset={'city'} background blur={1} />
                        <OrbitControls autoRotate autoRotateSpeed={2} enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1} />
                    </Canvas>
                </div>
            <div className='Soccer__right '><p className='Montserrat'>Ever since I was a kid I play soccer. It can be with my friends or in my school, whatever I just like playing soccer</p></div>
        </div>

    )

}

export const Shoe = () =>{
    
    const {nodes,materials} = useGLTF('/assets/textures/airforce.glb')
    function seeing(){
        console.log("Nodes: ",nodes, "\n Materials: ", materials)
    }
    seeing()
    return (
        <group>
            <mesh castShadow receiveShadow geometry={nodes.Nike_Air_Force_Left.geometry} material={materials['Flap Material.002']} />
        </group>
    )
}