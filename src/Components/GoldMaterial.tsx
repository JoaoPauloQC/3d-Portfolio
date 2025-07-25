import { createRoot } from 'react-dom/client'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import footballtexture from '../../public/assets/textures/football-texture.avif'
import * as THREE from 'three'
import { Environment, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

export const DecimalGoldMaterial = () => {

    

    return (
        <div className='DecimalGoldMaterial home__card gap-20 flex items-center'>
            <div className='DecimalGoldMaterial__left home__card__left  rounded-2xl'>
                <Canvas camera={{position: [0,0,4.5],fov: 50}} className='w-full h-full'>
                    <ambientLight intensity={Math.PI / 2} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                    <DecimalGold/>
                </Canvas>
            </div>
            <div className='DecimalGoldMaterial__right'>
                <p className='Montserrat'>I learned math studying gold materials</p>
            </div>
        </div>
    )

}

export const DecimalGold = () => {
    const meshRef = useRef<THREE.Mesh>(null!)
    useFrame((state,delta) => (meshRef.current.rotation.x += delta))
    return (
         <group position={[0,0,0]}>
            <mesh ref={meshRef} scale={1} >
                <boxGeometry args={[1,3,1]}/>
                <meshStandardMaterial color={"gold"}/>
            </mesh>
        </group>
    )
}