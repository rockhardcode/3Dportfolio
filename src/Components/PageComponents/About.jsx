import '../../assets/styles/About.css'
import React, { Suspense, useRef } from 'react'
import { ContactShadows } from '@react-three/drei'
import Guitar from '../GeomentryComponents/Guitar'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three' 
import AboutCard from '../CommonComponents/AboutCard'
import { aboutConst } from '../../assets/constants/CommonConstants'
import { useState } from 'react'
import {motion} from "framer-motion"
// import dynamic from 'next/dynamic';

// const Guitar = dynamic(() => import('../GeomentryComponents/Guitar'), { ssr: false });

function Rig({ children }) {
    const ref = useRef()
    useFrame((state) => {
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (state.mouse.x * Math.PI) / 20, 0.05)
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, (state.mouse.y * Math.PI) / 20, 0.05)
    })
    return <group ref={ref}>{children}</group>
  }
const About = () => {
  const [finalVal, setFinalVal] = useState([-10, -10.96, -40.16])
  const values = [[-10, -10.96, -40.16], [-2, -2.96, -25.16]]
  const handleClick = () => {
    setFinalVal(values[1])
  }
    return (
    <motion.div className="about-container" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition: {duration: 0.001}}}>
      {/* <button onClick={handleClick}>button</button> */}
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
          <Guitar location={finalVal}/>
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
        </motion.div>
    )
}
export default About
