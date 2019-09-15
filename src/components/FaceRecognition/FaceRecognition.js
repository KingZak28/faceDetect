import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imgUrl, box}) => {
  return (
    <div className="center ma">
      <div className ='absolute mt2' style={{left:"30%"}}>
        <img id='inputimage' className= "br3  ba b--red" src={imgUrl} alt="" width ="600px" height ='auto'/>
        <div className='absolute bounding_box' style={{top:box.top_row, right:box.right_col, left: box.left_col, bottom: box.bottom_row}}> </div>
      </div>
    </div>
  )
}

export default FaceRecognition;
