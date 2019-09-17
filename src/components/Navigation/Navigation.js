import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <h1 className='f1 dib grow' style= { {justifyContent: 'center'}}> Face Detect </h1>
      <nav className = 'dib' style= { {float:'right'}}>
        <p className = "f3 pa3 link dim underline black pointer"><Link to='/'> Sign out </Link> </p>
      </nav>
    </div>
  )
}

export default Navigation;
