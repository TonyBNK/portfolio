import React from "react";
import c from './Start.module.scss';
import {Nav} from "../Nav/Nav";
import titleImage from "../../assets/images/intro3.jpeg";
import Particles from "react-particles-js";


const particlesOpt = {
    'particles':{
        'number':{
            'value': 20,
            'density': {
                'enable': true,
                'value_area': 1000
            }
        }
    }
}

export const Start = () => {
    const intro = {
        backgroundImage: `url(${titleImage})`
    }

    return (
        <div className={c.container} style={intro}>
            <Particles className={c.particles} params={particlesOpt}/>
            <div className={c.header}>
                <div className={c.nav}>
                    <Nav/>
                </div>
            </div>
        </div>
    );
}