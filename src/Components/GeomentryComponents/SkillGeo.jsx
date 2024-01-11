import { useRef } from "react";
import { Decal, Float, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

const SkillGeo = (prop) => {
  const texture = useLoader(
    THREE.TextureLoader,
    prop.image
  );
  return (
    <Float speed={5} rotationIntensity={1} floatIntensity={6}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={1.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={prop.color}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          // transparent 
          // opacity={0.5}
          roughness={0.1}
          metalness={0.7}
        />
        <Decal map={texture} position={[0, 0, 1]} scale={[1.1, 1.1, 1.1]} />
      </mesh>
    </Float>
  );
};
export default SkillGeo;
