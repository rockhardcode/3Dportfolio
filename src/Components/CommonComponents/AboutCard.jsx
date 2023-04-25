import '../../assets/styles/AboutCardStyle.css'
import VanillaTilt from 'vanilla-tilt';
import React, { useEffect, useRef } from 'react';

const AboutCard = (props) => {
    const {num, title, desc, ...rest} = props
  const tilt = useRef(null);
  const options = {
    scale: 1.15,
    speed: 1000,
    max: 30
  };
  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);
    return (
        
        <div className='about-card-main' ref={tilt} {...rest}>
            <div className='card-number'>{num}</div>
            <div className='empty-space'></div>
          <div className='about-card-title'>{title}</div>
          <div className='about-desc'>{desc}</div>
        </div>
    )
}
export default AboutCard

