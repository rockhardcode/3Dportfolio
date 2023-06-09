import { Canvas, useFrame } from '@react-three/fiber'
import { Box, ContactShadows, Preload, Stars } from '@react-three/drei'
import React, { Suspense, useRef, useState } from 'react'
import { OrbitControls, Points, PointMaterial } from '@react-three/drei'
import '../../assets/styles/Skills.css'
import SkillGeo from '../GeomentryComponents/SkillGeo'
import * as THREE from 'three' 

const Skills = (props) => {
    const mesh = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    return (
        <div className='skill-container'>
        <Canvas className='skills-canvas' frameloop='demand' shadows gl={{preserveDrawingBuffer: true}}>
        <Suspense>
          <OrbitControls enableZoom={false}/>
          <SkillGeo/>
        </Suspense>
        {/* <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 1]} /> */}
        <Preload all/>
      </Canvas>
      </div>
    )
}
export default Skills