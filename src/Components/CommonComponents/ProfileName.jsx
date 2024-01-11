import '../../assets/styles/ProfileName.css'
import { useEffect, useRef  } from 'react'
import Typewriter from "typewriter-effect";
import Fade from './Fade';
import { motion } from "framer-motion";

const ProfileName = () => {
    const blinkNames = ['Front-End Developer', 'Bass Guitar Player']
    return (
        <div className='profile-name-container'>
            <motion.div 
               variants={Fade("right", 0.1)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.7 }}
               cx={500}
               animate={{ cx: [null, 100] }}
            className='hello'>Hello<span className='hello-hifen'>___</span></motion.div>
            <motion.div 
               variants={Fade("left", 0.1)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.7 }}
               cx={500}
               animate={{ cx: [null, 100] }}
            className='im-rakesh'><span className='i'>I'<span className='m'>m </span></span><span className='rakesh-name'> Rakesh Divate</span></motion.div>
            <motion.div 
               variants={Fade("right", 0.1)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.7 }}
               cx={500}
               animate={{ cx: [null, 100] }}
            className='typing-effect'> a &nbsp; <span className='effect-text'> <Typewriter
              options={{
              strings: ['Front-End Developer','Bass Guitar Player'],
              autoStart: true,
              loop: true,
                     }}
            /></span></motion.div>
        </div>
    )
}
export default ProfileName