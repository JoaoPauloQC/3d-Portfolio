import { PointMaterial, Points } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { random } from "maath";
import { useRef, useState } from "react"
import * as THREE from "three";

export const Stars = () => {
    const ref = useRef<THREE.Points>(null)
    const [spherespos] = useState<Float32Array>(() => random.inSphere(new Float32Array(5000),{radius: 1.2}))

    useFrame((state,delta)=>{
        if(ref.current){
            console.log(delta)
            ref.current.rotation.x -= delta/ 10
            ref.current.rotation.x -= delta/ 15
        }
    })

    return (
        <group rotation={[0,0,Math.PI/4]}>
            <Points ref={ref} positions={spherespos}>
                <PointMaterial
                    transparent
                    color={"#ffffff"}
                    size={0.002}
                    sizeAttenuation
                    depthWrite={false}
                >
                    
                </PointMaterial>
            </Points>

        </group>

    )
}

const StarsCanvas = () => {
    return (
        <div className="absolute inset-0 z-[-1]">
            <Canvas camera={{position: [0,0,1]}}>
                <Stars/>
            </Canvas>
        </div>
    )
}

export default StarsCanvas