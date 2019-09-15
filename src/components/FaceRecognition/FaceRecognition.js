import React from 'react';

const FaceRecognition = ({imgUrl}) => {
  return (
    <div>
      <img className= "center mt2 br3  ba b--red" src={imgUrl} alt=""  height ='auto'/>
    </div>
  )
}

export default FaceRecognition;
