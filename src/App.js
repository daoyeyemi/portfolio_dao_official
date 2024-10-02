import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Navbar from "./components/NavBar";
import Particles from "react-particles-js";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <div>
        <Particles style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1
                }}
            params={{
              "particles": {
                "number": {
                  "value": 170,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#ffffff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 1,
                    "color": "ffffff"
                  },
                  "polygon": {
                    "nb_sides": 5
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 0.8,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 2,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 10,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 50,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 4
                },
                "move": {
                  "enable": true,
                  "speed": 1,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "push"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 140,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 1
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  },
                }
              },
              "retina_detect": true
            }} />
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} /> 
          <Route path="/contact" component={Contact} />
          <Route path="/project" component={Project} />
        </Switch>
      </AnimatePresence>
        
    </div>
    
  );
}

export default App;
