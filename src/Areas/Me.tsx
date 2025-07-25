import { createRoot } from 'react-dom/client'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import footballtexture from '../../public/assets/textures/football-texture.avif'
import { Environment, OrbitControls } from '@react-three/drei'
import { Soccer } from '@/Components/Soccer'
import { DecimalGoldMaterial } from '@/Components/GoldMaterial'
import { MeStars } from '@/Components/MeStars'

export const Me = () => {

    

    return(
    <div className='Me py-20'>
        <Soccer/>
        <DecimalGoldMaterial/>
        <MeStars/>
    </div>
    )
}


    
