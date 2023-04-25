import Globe from "../GeomentryComponents/Globe"
import React from "react"
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Points, PointMaterial } from '@react-three/drei'
const ContaceMe = () => {
    return (
        <div className='contact-me'>
      <div className='text-hello'>contact Me</div>
       {/* <Canvas className='canvvvas'>
        <OrbitControls  enableZoom={false}/>
        <ambientLight intensity={0.5}/>
        <directionalLight color="red" position={[0, 0, 5]} />
        <Globe/>
      </Canvas> */}
     </div>
    )
}
export default ContaceMe