export const API_KEY = "80ace5eb3ecf4e15adc4361567225451";

export const PARTICLEPARAMS = {
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

};
