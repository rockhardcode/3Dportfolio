import '../../assets/styles/About.css'
import React, { Suspense, useRef } from 'react'
import { ContactShadows } from '@react-three/drei'
import Guitar from '../GeomentryComponents/Guitar'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three' 
import AboutCard from '../CommonComponents/AboutCard'
import { aboutConst } from '../../assets/constants/CommonConstants'

function Rig({ children }) {
    const ref = useRef()
    useFrame((state) => {
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (state.mouse.x * Math.PI) / 20, 0.05)
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, (state.mouse.y * Math.PI) / 20, 0.05)
    })
    return <group ref={ref}>{children}</group>
  }
const About = () => {
    return (
    <div className="about-container">
      <div className='glass-options'>
        {aboutConst.map((item)=>{
          return <AboutCard num={item.num} title={item.title} desc={item.desc}/>
        })}
      </div>
      <Canvas className='about-canvas' camera={{ position: [0, -10, 65], fov: 50 }} dpr={[1, 2]}>
        <pointLight position={[100, 100, 100]} intensity={0.8} />
        <hemisphereLight color="#ffffff" groundColor="#b9b9b9" position={[-7, 25, 13]} intensity={0.85} />
        <Suspense fallback={null}>
          <group position={[0, 10, 0]}>
          <Rig>
          <Guitar/>
            </Rig>
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -35, 0]}
              opacity={0.25}
              width={100}
              height={100}
              blur={2}
              far={50}
            />
          </group>
        </Suspense>
      </Canvas>
        </div>
    )
}
export default About
