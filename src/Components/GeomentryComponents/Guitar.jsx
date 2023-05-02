import { useLoader, useFrame, useThree   } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"
const Guitar = (props) => {
   const {location} = props
   const [locations, setLocations] = useState()
   useEffect(() => {
      setLocations(location)
   }, [location])
   console.log(location)
    const group = useRef()
    const gltf = useLoader(GLTFLoader, 'models/guitar.glb')
    const headphones = useLoader(GLTFLoader, 'models/headphone.glb')
    const gameboy = useLoader(GLTFLoader, 'models/gameboy.glb')
    const laptop = useLoader(GLTFLoader, 'models/laptop.glb')
    const plane = useLoader(GLTFLoader, 'models/plane.glb')
    const band = useLoader(GLTFLoader, 'models/headband.glb')
    const kuni = useLoader(GLTFLoader, 'models/kuni.glb')
    useFrame((state) => {
        group.current.children.forEach((child, index) => {
        child.position.y += Math.sin(index * 1000 + state.clock.elapsedTime) / 50
        child.rotation.x += (Math.sin(index * 1000 + state.clock.elapsedTime) * Math.PI) / 2000
        child.rotation.y += (Math.sin(index * 1000 + state.clock.elapsedTime) * Math.PI) / 3000
        child.rotation.z += (Math.sin(index * 1000 + state.clock.elapsedTime) * Math.PI) / 4000
    })
      });
    return  <group ref={group} dispose={null}>
                <mesh 
                   scale={10} 
                   position={locations} // [-10, -10.96, -40.16]
                   rotation={[5.76, 6, -0.19]}
                   >
                      <primitive object={gltf.scene}/>
                </mesh>
                <mesh 
                   scale={5} 
                   position={[38.9, -20.6, -8.01]}
        rotation={[1.26, 0.91, -1.86]}>
                      <primitive  object={headphones.scene}/> 
                </mesh>
                <mesh 
                   scale={0.7} 
                   position={[-10.22, -18.99, 30.03]}
        rotation={[5.55, 6.32, -0.76]}>
                      <primitive  object={gameboy.scene}/> 
                </mesh>
                <mesh 
                   scale={1.5} 
                   position={[-38.4, -14.96, -13.21]}
        rotation={[1.83, -0.23, 0.91]}>
                      <primitive  object={laptop.scene}/> 
                </mesh>
                <mesh 
                   scale={0.04} 
                   position={[10.4, -20.96, 15.21]}
        rotation={[1.6, -1.93, 0.91]}>
                      <primitive  object={plane.scene}/> 
                </mesh>
                <mesh 
                   scale={0.3} 
                   position={[-15.4, 1.96, -12.21]}
        rotation={[3.6, -4, 0.91]}>
                      <primitive  object={band.scene}/> 
                </mesh>
                <mesh 
                   scale={5} 
                   position={[10.4, -10.96, 3.21]}
        rotation={[1.6, -1.93, 0.91]}>
                      <primitive  object={kuni.scene}/> 
                </mesh>
            </group>

}
export default Guitar
