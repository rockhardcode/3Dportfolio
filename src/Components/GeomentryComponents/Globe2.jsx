import { useLoader, useFrame, useThree   } from "@react-three/fiber"
import { useEffect } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useRef } from "react"
const Globe2 = () => {
    // const gltf = useLoader(
    //     GLTFLoader,
    //     process.env.PUBLIC_URL + "models/globe.gltf"
    // )
    const gltf = useLoader(GLTFLoader, 'models/globe2.gltf')
    const sceneRef = useRef()
    useFrame(() => {
        sceneRef.current.rotation.y += 0.01; // Rotate by 0.01 radians per frame
      });
    // useEffect(()=>{
    //     gltf.scene.scale.set(2.5,2.5,2.5)
    //     gltf.scene.position.set(0,-0.035,0)
    //     gltf.scene.rotateX(0.5,0.5,0.5)
    // }, [])
    return <primitive ref={sceneRef} object={gltf.scene}/>
}
export default Globe2