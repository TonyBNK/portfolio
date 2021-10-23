import c from "./Skills.module.scss";
import React from "react";
import {Skill} from "./Skill/Skill";
import reactIcon from '../../assets/icons/react_original_logo_icon_146374.svg';
import jsIcon from '../../assets/icons/javascript-seeklogo.com.svg';
import tsIcon from '../../assets/icons/typescript.svg';
import htmlIcon from '../../assets/icons/html.png';
import cssIcon from '../../assets/icons/css-3.png';
import reduxIcon from '../../assets/icons/redux.png';


export const Skills = () => {
    const skills = [
        {id: 1, icon: jsIcon, title: 'JavaScript', description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, nostrum!`},
        {id: 2, icon: tsIcon, title: 'TypeScript', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, nostrum!'},
        {id: 3, icon: reactIcon, link: 'https://ru.reactjs.org', title: 'React', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, nostrum!'},
        {id: 4, icon: reduxIcon, title: 'Redux', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, nostrum!'},
        {id: 5, icon: htmlIcon, title: 'HTML', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, nostrum!'},
        {id: 6, icon: cssIcon, title: 'CSS', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, nostrum!'},
    ];

    const skillsList = skills.map(skill =>
        <Skill
            id={skill.id}
            link={skill.link}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
        />
    );

    return (
        <div className={c.skillsArea}>
            <div className={c.skills}>
                <div className={c.container}>
                    <div className={c.titleRow}>
                        <div className={c.titleCol}>
                            <div className={c.sectionTitle}>
                                <h2>Skills</h2>
                            </div>
                        </div>
                    </div>
                    <div className={c.descriptionRow}>
                        <div className={c.descriptionCol}>
                            <div className={c.contentRow}>
                                {
                                    skillsList
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}