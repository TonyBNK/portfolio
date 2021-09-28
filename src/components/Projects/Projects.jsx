import c from "./Projects.module.scss";
import React from "react";
import {Project} from "./Project/Project";
import styles from '../../common/styles/Container.module.css'
import {Title} from "../../common/components/title/Title";
import todolist from '../../assets/images/todolist.png';

export const Projects = () => {
    const todo = {
        backgroundImage: `url(${todolist})`
    }

    const projects = [
        {id: 1, style: todo, title: 'Todolist', description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, praesentium!`},
        {id: 2, style: null, title: 'Social Network JS', description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, praesentium!`},
        {id: 3, style: null, title: 'Social Network TS', description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, praesentium!`},
        {id: 4, style: null, title: 'Counter', description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, praesentium!`},
    ];

    const projectsForBlock = projects.map(project =>
        <Project
            id={project.id}
            style={project.style}
            title={project.title}
            description={project.description}
        />
    );

    return (
        <div className={c.projectsBlock}>
            <div className={styles.container}>
                <Title text='Projects'/>
                <div className={c.body}>
                    {
                        projectsForBlock
                    }
                </div>
            </div>
        </div>
    );
}