import c from "./Skills.module.css";
import React from "react";
import {Skill} from "./Skill/Skill";
import styles from '../../common/styles/Container.module.css';
import {Title} from "../../common/components/title/Title";

export const Skills = () => {
    const skills = [
        {id: 1, image: 'https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text.png', title: 'JS', description: 'Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description '},
        {id: 2, image: 'https://blog.submain.com/wp-content/uploads/2020/12/typescript_2500.png', title: 'TS', description: 'Description'},
        {id: 3, image: 'https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png', title: 'React', description: 'Description'},
        {id: 4, image: 'https://tabris.com/wp-content/uploads/2020/08/redux-logo-e1597223260395.png', title: 'Redux', description: 'Description'},
        {id: 5, image: 'https://cdn.dribbble.com/users/66221/screenshots/1655593/html5.png', title: 'HTML', description: 'Description'},
        {id: 6, image: 'https://cdn.dribbble.com/users/66221/screenshots/1655604/css3.png', title: 'CSS', description: 'Description'},
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
            <div className={styles.container}>
                <Title text={'Skills'}/>
                <div className={c.body}>
                    {
                        skillsForBlock
                    }
                </div>
            </div>
        </div>
    );
}