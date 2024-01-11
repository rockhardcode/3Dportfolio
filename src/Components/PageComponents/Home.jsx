import React from "react";
import "../../assets/styles/Home.css";
import ProfileName from "../CommonComponents/ProfileName";
import { Canvas } from "@react-three/fiber";
import { Plane } from "@react-three/drei";
import * as THREE from "three"
import { useFrame, useThree } from "@react-three/fiber"
// import { Outlines, Environment, useTexture } from "@react-three/drei"
import { Physics, useSphere } from "@react-three/cannon"
import { EffectComposer, N8AO, SMAA } from "@react-three/postprocessing"
import {motion} from "framer-motion"
import { useMemo } from 'react'

const rfs = THREE.MathUtils.randFloatSpread
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)

const Home = () => {
  const baubleMaterial = useMemo(() => new THREE.MeshStandardMaterial({ color: 'red', roughness: 0, envMapIntensity: 1 }), []);
  return (
    <motion.div className="home-container" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition: {duration: 0.001}}}>
      <div className="profile-name">
        <ProfileName />
      </div>
      <Canvas className="home-objects" shadows gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}>
    <ambientLight intensity={0.5} />
    {/* <color attach="background" args={["#deb787"]} /> // 5979a8 599ea8 */}
    <spotLight intensity={0.8} angle={0.2} penumbra={1} position={[30, 30, 30]} castShadow shadow-mapSize={[512, 512]} />
    <Physics gravity={[0, 2, 0]} iterations={10}>
      <Pointer />
      {/* <Clump /> */}
      <Clump baubleMaterial={baubleMaterial} />
    </Physics>
    {/* <Environment files="/adamsbridge.hdr" /> */}
    <EffectComposer disableNormalPass multisampling={0}>
      <N8AO halfRes color="black" aoRadius={1} intensity={1} aoSamples={6} denoiseSamples={2} />
      <SMAA />
    </EffectComposer>
  </Canvas>
    </motion.div>
  );
};
export default Home;

function Clump({ baubleMaterial, mat = new THREE.Matrix4(), vec = new THREE.Vector3(), ...props }) {
  // const { outlines } = useControls({ outlines: { value: 0.0, step: 0.01, min: 0, max: 0.05 } })
//   const texture = useTexture("/cross.jpg")
  const [ref, api] = useSphere(() => ({ args: [1], mass: 1, angularDamping: 0.1, linearDamping: 0.65, position: [rfs(20), rfs(20), rfs(20)] }))
  useFrame((state) => {
    for (let i = 0; i < 40; i++) {
      // Get current whereabouts of the instanced sphere
      ref.current.getMatrixAt(i, mat)
      // Normalize the position and multiply by a negative force.
      // This is enough to drive it towards the center-point.
      api.at(i).applyForce(vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-40).toArray(), [0, 0, 0])
    }
  })
  return (
    // <instancedMesh ref={ref} castShadow receiveShadow args={[sphereGeometry, baubleMaterial, 40]} >
    //   <Outlines thickness={outlines} />
    // </instancedMesh>
    <instancedMesh ref={ref} castShadow receiveShadow args={[sphereGeometry, baubleMaterial, 40]}>
      {/* <Outlines thickness={outlines} /> */}
    </instancedMesh>
  )
}

function Pointer() {
  const viewport = useThree((state) => state.viewport)
  const [, api] = useSphere(() => ({ type: "Kinematic", args: [3], position: [0, 0, 0] }))
  return useFrame((state) => api.position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0))
}
