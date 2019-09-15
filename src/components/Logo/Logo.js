import React from 'react';
import Tilt from 'react-tilt';
import icon from './ai.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0' >
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner "> <img alt='Face Detection' style={{paddingTop: '5px'}} src ={icon} /> </div>
      </Tilt>
    </div>
  )
}

export default Logo;
