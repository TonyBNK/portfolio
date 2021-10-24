import c from "./Skills.module.scss";
import React from "react";
import {Skill} from "./Skill/Skill";
import reactIcon from '../../assets/icons/react_original_logo_icon_146374.svg';
import jsIcon from '../../assets/icons/javascript-seeklogo.com.svg';
import tsIcon from '../../assets/icons/typescript.svg';
import htmlIcon from '../../assets/icons/html.png';
import cssIcon from '../../assets/icons/css-3.png';
import reduxIcon from '../../assets/icons/redux.png';
import Slide from 'react-reveal/Slide';


export const Skills = () => {
    const skills = [
        {
            id: 1,
            icon: jsIcon,
            link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript',
            title: 'JavaScript',
            description: `JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.`
        },
        {
            id: 2,
            icon: tsIcon,
            link: 'https://www.typescriptlang.org/',
            title: 'TypeScript',
            description: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.'
        },
        {
            id: 3,
            icon: reactIcon,
            link: 'https://ru.reactjs.org',
            title: 'React',
            description: 'React is a JavaScript library for building user interfaces.'
        },
        {
            id: 4,
            icon: reduxIcon,
            link: 'https://redux.js.org/',
            title: 'Redux',
            description: 'Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native).'
        },
        {
            id: 5,
            icon: htmlIcon,
            link: 'https://developer.mozilla.org/ru/docs/Learn/HTML/Introduction_to_HTML/Getting_started',
            title: 'HTML',
            description: 'HTML is a markup language that tells web browsers how to structure the web pages you visit.'
        },
        {
            id: 6,
            icon: cssIcon,
            link: 'https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics',
            title: 'CSS',
            description: 'CSS is a style sheet language. It is what you use to selectively style HTML elements.'
        },
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
                                <Slide bottom>
                                    <h2>Skills</h2>
                                </Slide>
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