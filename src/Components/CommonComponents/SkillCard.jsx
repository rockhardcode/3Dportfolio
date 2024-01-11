import { Canvas, useFrame } from "@react-three/fiber";
import { Box, ContactShadows, Preload, Stars } from "@react-three/drei";
import React, { Suspense, useRef, useState } from "react";
import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
import "../../assets/styles/Skills.css";
import SkillGeo from "../GeomentryComponents/SkillGeo";
import * as THREE from "three";
import "../../assets/styles/SkillCard.scss";

const SkillCard = (props) => {
  return (
    <div className="skill-container">
      <Canvas
        className="skills-canvas"
        frameloop="demand"
        shadows
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense>
          <OrbitControls enableZoom={false} />
          <SkillGeo image={props.image} color={props.color}/>
        </Suspense>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 1]} />
        <Preload all />
      </Canvas>
      <div className="percentage">
        <p>{props.name}</p>
      </div>
    </div>
  );
};
export default SkillCard;
