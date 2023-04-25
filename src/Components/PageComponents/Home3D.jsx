import { Canvas, useFrame } from '@react-three/fiber'
import Stars from '../GeomentryComponents/Stars'
import Home from '../PageComponents/Home'
import '../../assets/styles/Home3D.css'
import About from '../../Components/PageComponents/About'
import Globe from '../GeomentryComponents/Globe'
import { OrbitControls } from '@react-three/drei'
const Home3D = () => {
    return(
        <div className='home-ani-container'>
            <Canvas className='home-animation' camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    )
} 
export default Home3D