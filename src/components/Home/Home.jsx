import React from "react";
import c from './Home.module.scss';
import Particles from "react-particles-js";
import ReactTypingEffect from 'react-typing-effect';


const particlesOpt = {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 2,
            "direction": "top",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
        }
    }
}

export const Home = () => {
    return (
        <div className={c.home} id='home'>
            <div className={c.sliderWrapper}>
                <div className={c.personalPortfolioSlider}>
                    <Particles className={c.particles} params={particlesOpt}/>
                    <div className={c.container}>
                        <div className={c.row}>
                            <div className={c.col}>
                                <div className={c.inner}>
                                    <span>Welcome to my World</span>
                                    <h1>
                                        Hi, I'm Anton
                                    </h1>
                                    <ReactTypingEffect
                                        text={'Front-end developer'}
                                        cursorRenderer={
                                            cursor => <h2 style={{color: '#008bff'}}>{cursor}</h2>
                                        }
                                        displayTextRenderer={
                                            text => <h2 style={{color: '#008bff'}}>
                                                {text}
                                            </h2>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}