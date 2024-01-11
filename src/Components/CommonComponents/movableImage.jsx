import React, { useState, useEffect } from 'react';
import image from '../../assets/images/thumbnail5.jpg'
import "../../assets/styles/Project.scss"

export const MoveableImage = () => {
  const [position, setPosition] = useState({ x: 55, y: 55 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array to run this effect once on mount

  return (
    <div className="image-movable" style={{ left: position.x, top: position.y }}>
      {/* Your image component goes here */}
      <img className='image-container-movable' src={image} alt="Moveable Image" />
    </div>
  );
};