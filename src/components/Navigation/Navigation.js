import React from 'react';

const Navigation = () => {
  return (
    <div>
      <h1 className='f1 dib grow' style= { {justifyContent: 'center'}}> Face Detect </h1>
      <nav className = 'dib' style= { {float:'right'}}>
        <p className = "f3 pa3 link dim underline black pointer"> Sign out </p>
      </nav>
    </div>
  )
}

export default Navigation;
