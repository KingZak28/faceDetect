import React from 'react';
import {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageForm from './components/ImageForm/ImageForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import 'tachyons';

import{ API_KEY } from './constants';
const particleParams = {
    particles: {
      number: {
        value: 230,
        density: {
          enable: true,
          value_area: 800
        }
      }
    },
    opacity:{
      value: 0.5
    },
    interactivity: {
       detect_on: "window",
       events: {
           onhover: {
               enable: true,
               mode: "repulse"
           },
           onclick: {
               enable: true,
               mode: "push"
           },
           resize: true,

       }
     }

}

const app = new Clarifai.App({
 apiKey: API_KEY
});



class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imgUrl: '',
      box: {}
    }
  }

  //Event listener for input box change
  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({input: event.target.value})
  }

  onButtonSubmit = (event) => {
    this.setState({imgUrl: this.state.input });

    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => this.displayBox(this.calculateFaceBox(response)))
      .catch(err => console.log(err));
  }

  calculateFaceBox = (data) => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    console.log(image);
    //Typecast to number because the value returned is a string
    const width = Number(image.width);
    const height = Number(image.height);
    console.log("H: " + height + "and width: " + width );
    //We want to return an object with the dimensions of the box
    return {
        top_row : face.top_row*height,
        left_col: face.left_col *width,


        bottom_row:height -( face.bottom_row*height),
        right_col: width - (face.right_col * width)

    }
  }

  displayBox = (box) => {
      this.setState({box});
      console.log(box);
  }

  render() {
      return (
      <div className="App">

        <Particles className="particles" params={particleParams}/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imgUrl={this.state.imgUrl} box={this.state.box} />
      </div>
    );
  }
}

export default App;
