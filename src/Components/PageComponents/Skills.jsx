import { Canvas, useFrame } from '@react-three/fiber'
import { Box, ContactShadows, Preload, Stars } from '@react-three/drei'
import React, { Suspense, useRef, useState } from 'react'
import { OrbitControls, Points, PointMaterial } from '@react-three/drei'
import '../../assets/styles/Skills.css'
import SkillGeo from '../GeomentryComponents/SkillGeo'
import * as THREE from 'three' 
import SkillCard from '../CommonComponents/SkillCard'
import "../../../skillImg/github.png"

const Skills = (props) => {
    const mesh = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    return (
        <div className='skill-main-container'>
      <SkillCard image="../../../skillImg/github.png" color="black" name="GitHub"/>
      <SkillCard image="../../../skillImg/ts.png" color="#007acc" name="Type Script"/>
      <SkillCard image="../../../skillImg/js.png" color="yellow" name="Java Script"/>
      <SkillCard image="../../../skillImg/react.png" color="black" name="ReacrJs"/>
      <SkillCard image="../../../skillImg/html.png" color="white" name="HTML"/>
      <SkillCard image="../../../skillImg/css.png" color="white" name="CSS"/>
      <SkillCard image="../../../skillImg/sql.png" color="#005d85" name="SQL"/>
      <SkillCard image="../../../skillImg/node.png" color="black" name="NodeJS"/>
      <SkillCard image="../../../skillImg/mongo.png" color="#001e2b" name="MongoDB"/>
      <SkillCard image="../../../skillImg/three.png" color="white" name="Three Js"/>
      </div>
    )
}
export default Skills