import c from "./Projects.module.css";
import React from "react";
import {Project} from "./Project/Project";
import styles from '../../common/styles/Container.module.css'

export const Projects = () => {
    const projects = [
        {id: 1, image: '', title: 'Todolist', description: 'Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description '},
        {id: 2, image: '', title: 'Social Network JS', description: 'Description'},
        {id: 3, image: '', title: 'Social Network TS', description: 'Description'},
        {id: 4, image: '', title: 'Counter', description: 'Description'},
    ];

    const projectsForBlock = projects.map(project =>
        <Project
            id={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
        />
    );

    return (
        <div className={c.skillsBlock}>
            <div className={styles.container}>
                <div className={c.header}>
                    <h2>My projects</h2>
                </div>
                <div className={c.body}>
                    {
                        projectsForBlock
                    }
                </div>
            </div>
        </div>
    );
}