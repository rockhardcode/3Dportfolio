import { useLoader, useFrame, useThree   } from "@react-three/fiber"
import { useEffect } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useRef } from "react"
const Globe = () => {
  const gltf = useLoader(GLTFLoader, 'scene.gltf');
  console.log(gltf)

  // Access the loaded scene or other parts of the glTF data
  // const { scene } = gltf;

  return <primitive object={gltf.scene} />;

}
export default Globe

   // const gltf = useLoader(
    //     GLTFLoader,
    //     process.env.PUBLIC_URL + "models/globe.gltf"
    // )
    // const gltf = useLoader(GLTFLoader, 'scene.gltf')
    // const sceneRef = useRef()
    // useFrame(() => {
    //     sceneRef.current.rotation.y += 0.01; // Rotate by 0.01 radians per frame
    //   });
    // useEffect(()=>{
    //     gltf.scene.scale.set(2.5,2.5,2.5)
    //     gltf.scene.position.set(0,-0.035,0)
    //     gltf.scene.rotateX(0.5,0.5,0.5)
    // }, [])
    // return <primitive ref={sceneRef} object={gltf.scene}/>
    // return <primitive object={gltf.scene}/>