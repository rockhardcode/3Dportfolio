import { useRef } from "react"
import { Decal, Float, useTexture } from '@react-three/drei'
import image from '../../assets/images/flogo.png'
const SkillGeo = () => {
      const group = useRef()
      const [logo12] = useTexture('../../assets/images/flogo.png')
    return  <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow receiveShadow scale={0.5}>
         <icosahedronGeometry args={[1,1]}/>
         <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading/>
         <Decal map={logo12} position={[0,0,1]}/> 
      </mesh>
    </Float>

}
export default SkillGeo


// <mesh 
// scale={0.5} 
// position={[0,0,0]}
// //    rotation={[1.76, 0.07, -0.19]}
// >
//  <Box/>
//    {/* <icosahedronGeometry material={material}/> */}
//    <meshStandardMaterial color={'hotpink'} />
// </mesh>

// map={decal}