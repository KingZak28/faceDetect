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
      imgUrl: ''
    }
  }

  //Event listener for input box change
  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({input: event.target.value})
  }

  onButtonSubmit = (event) => {
    this.setState({imgUrl: this.state.input });

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err) {
        // there was an error
      }
    );
  }
  render() {
      return (
      <div className="App">

        <Particles className="particles" params={particleParams}/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imgUrl={this.state.imgUrl} />
      </div>
    );
  }
}

export default App;
