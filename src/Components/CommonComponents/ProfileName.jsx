import '../../assets/styles/ProfileName.css'
import { useEffect, useRef  } from 'react'
import Typewriter from "typewriter-effect";
const ProfileName = () => {
    const blinkNames = ['Front-End Developer', 'Designer', 'Bass Guitar Player']
    return (
        <div className='profile-name-container'>
            <div className='hello'>Hello<span className='hello-hifen'>___</span></div>
            <div className='im-rakesh'><span className='i'>I'<span className='m'>m </span></span><span className='rakesh-name'> Rakesh Divate</span></div>
            <div className='typing-effect'> a &nbsp; <span className='effect-text'> <Typewriter
              options={{
              strings: ['Front-End Developer', 'Designer', 'Bass Guitar Player'],
              autoStart: true,
              loop: true,
                     }}
            /></span></div>
        </div>
    )
}
export default ProfileName