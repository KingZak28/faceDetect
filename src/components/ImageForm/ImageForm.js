import React from 'react';

//Destructures event listener function from the props
const ImageForm = ({onInputChange,onButtonSubmit}) => {
  return (
    <div>
      <p className ='f2 black'>
        {'Paste a link below to be able to detect faces in photographs.'}
      </p>
      <div>
        <input className='f4 pa2 w-30 center ba b--white bw1' type='tex'placeholder='Enter a link to a photo'onChange={onInputChange} />
        <input className='f4 w-5 grow link pv2 dib black bg-light-red ba b--red bw1' type = 'submit' value='Detect' onClick = {onButtonSubmit} />

      </div>
    </div>
  )
}

export default ImageForm;
