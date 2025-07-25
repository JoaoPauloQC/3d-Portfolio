import { createRoot } from 'react-dom/client'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import footballtexture from '../../public/assets/textures/football-texture.jpg'
import { Environment, OrbitControls } from '@react-three/drei'


export const Soccer = () => {

    
    

    return(
    <div className='pt-24 gap-20 home__card  flex items-center'>
        <div className='Soccer__left home__card__left  rounded-2xl'>    
            <Canvas camera={{position: [0,0,4.5],fov: 50}} className='rounded-2xl w-full h-full'>
                <group position={[0, 0, 0]}>
                    <Ball/>
                </group>
                <Environment preset={'park'} background blur={0.} />
                <OrbitControls autoRotate autoRotateSpeed={2} enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1} />
            </Canvas>
        </div>
        <div className='Soccer__right '><p className='Montserrat'>Ever since I was a kid I play soccer. It can be with my friends or in my school, whatever I just like playing soccer</p></div>
    </div>
    )
}

export const Ball = () => {

    const footballimg = useLoader(TextureLoader, footballtexture.src)

    return(
    
        <mesh> 
            <sphereGeometry args={[0.75,64,32]} />
            <meshStandardMaterial map={footballimg}/>
        </mesh>
    
    )
}
    


