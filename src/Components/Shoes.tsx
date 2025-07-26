import { useGLTF, useProgress } from "@react-three/drei"
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import footballtexture from '../../public/assets/textures/football-texture.avif'
import * as THREE from 'three'
import { Environment, OrbitControls } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { group } from "console"
import { div } from "three/src/nodes/TSL.js"


export const Shoes = () =>{

    return (

        <div className='pt-24 gap-20 home__card  flex items-center'>
                <div className='Soccer__left home__card__left  rounded-2xl'>    
                    <Canvas camera={{position: [0,0,0.8],fov: 50}} className='rounded-2xl w-full h-full'>
                        
                            <Shoe/>
                      
                        <Environment preset={'city'} background blur={1} />
                        <OrbitControls autoRotate autoRotateSpeed={2} enablePan={false} enableZoom={false} minPolarAngle={0} maxPolarAngle={Math.PI} />
                    </Canvas>
                </div>
            <div className='Soccer__right '><p className='Montserrat'>This is the AirForce from Nike, the shoes I use nowadays.</p></div>
        </div>

    )

}

export const Shoe = () =>{
    
    const {nodes,materials} = useGLTF('/assets/textures/airforce.glb')
    const {progress} = useProgress()
    useEffect(()=> console.log(progress),[progress])


    function seeing(){
        console.log("Nodes: ",nodes, "\n Materials: ", materials)
    }
    seeing()
    return (
        <>
        {progress < 100 && 
            (
                <div>
                    <h1 className="text-white text-2xl Poppins">Loading {progress}</h1>
                </div>
            )
        }
        <group scale={1}>
            <primitive object={nodes.Nike_Logo_left004} material={materials['Logo left Material']} />
            <primitive object={nodes.Nike_Logo_left005} material={materials['Logo left Material']}/>
            <primitive object={nodes.Nike_Logo_right004} material={materials['Logo right Material']}/>
            <primitive object={nodes.Nike_Logo_right005} material={materials['Logo right Material']}/>
            <mesh castShadow receiveShadow geometry={(nodes.Laces005 as THREE.Mesh).geometry} material={materials['Laces Material']} />
            <mesh castShadow receiveShadow geometry={(nodes.Laces006 as THREE.Mesh).geometry} material={materials['Laces Material']} />
            <mesh castShadow receiveShadow geometry={(nodes.Plane040 as THREE.Mesh).geometry} material={materials['Main Body Material']} />
            <mesh castShadow receiveShadow geometry={(nodes.Plane040_1 as THREE.Mesh).geometry} material={materials['Main Body Material']} />
            <mesh castShadow receiveShadow geometry={(nodes.Plane040_2 as THREE.Mesh).geometry} material={materials['Main Body Material']} />
            <mesh castShadow receiveShadow geometry={(nodes.Plane040_3 as THREE.Mesh).geometry} material={materials['Main Body Material']} />
            <mesh castShadow receiveShadow geometry={(nodes.Plane044 as THREE.Mesh).geometry} material={materials['Main Body Material']} />
            <mesh castShadow receiveShadow geometry={(nodes.Plane044_1 as THREE.Mesh).geometry} material={materials['Main Body Material']} />
            <mesh castShadow receiveShadow geometry={(nodes.Plane044_2 as THREE.Mesh).geometry} material={materials['Main Body Material']} />
            <mesh castShadow receiveShadow geometry={(nodes.Plane044_3 as THREE.Mesh).geometry} material={materials['Main Body Material']} />
            <mesh castShadow receiveShadow geometry={(nodes.Shoe_Flap008 as THREE.Mesh).geometry} material={materials['Main Body Material']} />
            <mesh castShadow receiveShadow geometry={(nodes.Shoe_Flap009 as THREE.Mesh).geometry} material={materials['Main Body Material']} />
            <mesh castShadow receiveShadow geometry={(nodes.Shoe_Flap010 as THREE.Mesh).geometry} material={materials['Main Body Material']} />
            <mesh castShadow receiveShadow geometry={(nodes.Shoe_Flap011 as THREE.Mesh).geometry} material={materials['Main Body Material']} />    
               
    </group>
    </>
    )
}