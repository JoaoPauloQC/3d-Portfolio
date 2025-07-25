import { OrbitControls, Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

export const MeStars = () => {
    return (
        <div className='pt-24 gap-20 home__card  flex items-center'>
            <div className='Stars__left home__card__left  rounded-2xl border-2 border-neutral-800'> 
                <Canvas className="rounded-2xl">
                    <color attach={'background'} args={['black']}/>
                    <StarsMesh/>
                    <OrbitControls autoRotate autoRotateSpeed={0.2} enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1} />
                </Canvas>
            </div>
            <div className="Stars__right home__card__right">
                <p className="Montserrat">I absolutely love the space and astronomics</p>
            </div>  
        </div>

    )
}

export const StarsMesh = () =>{
    return(
        <Stars saturation={1} count={400} speed={1} />
    )
}