import c from "./Skill.module.scss";
import React from "react";
import Slide from 'react-reveal/Slide';
import Tilt from 'react-tilt';


export const Skill = (
    {
        id,
        link,
        icon,
        title,
        description
    }
) => {
    return (
        <Slide bottom>
            <div key={id} className={c.skillArea}>
                <a href={link} target={'_blank'} rel="noreferrer">
                    <Tilt>
                        <div className={c.skill}>
                            <center>
                                <div className={c.icon}>
                                    <img src={icon} alt="logo"/>
                                </div>
                                <div className={c.content}>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </div>
                            </center>
                        </div>
                    </Tilt>
                </a>
            </div>
        </Slide>
    );
}