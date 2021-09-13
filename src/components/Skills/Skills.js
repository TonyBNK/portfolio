import c from "./Skills.module.css";
import React from "react";
import {Skill} from "./Skill/Skill";
import jsImg from '../../images/js.png';
import tsImg from '../../images/ts.png';
import reactImg from '../../images/React.png';
import reduxImg from '../../images/Redux.png';
import htmlImg from '../../images/html5.png';
import cssImg from '../../images/css3.png';

export const Skills = () => {
    const skills = [
        {id: 1, image: {jsImg}, title: 'JS', description: 'Description'},
        {id: 2, image: {tsImg}, title: 'TS', description: 'Description'},
        {id: 3, image: {reactImg}, title: 'React', description: 'Description'},
        {id: 4, image: {reduxImg}, title: 'Redux', description: 'Description'},
        {id: 5, image: {htmlImg}, title: 'HTML', description: 'Description'},
        {id: 6, image: {cssImg}, title: 'CSS', description: 'Description'},
    ];

    const skillsForBlock = skills.map(skill =>
        <Skill
            id={skill.id}
            image={skill.image}
            title={skill.title}
            description={skill.description}
        />
    );

    return (
        <div className={c.skillsBlock}>
            <div className={c.container}>
                <div className={c.header}>
                    <h2>My skills</h2>
                </div>
                <div className={c.body}>
                    {
                        skillsForBlock
                    }
                </div>
            </div>
        </div>
    );
}