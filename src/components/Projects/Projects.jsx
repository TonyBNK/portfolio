import React from "react";
import {Project} from "./Project/Project";
import todolist from '../../assets/images/todolist.jpg';
import socialNetwork from '../../assets/images/socialNetwork.jpg';
import book_search from '../../assets/images/book.jpg';
import c from './Projects.module.scss';
import Slide from 'react-reveal/Slide';


export const Projects = () => {
    const todo = {
        backgroundImage: `url(${todolist})`
    }
    const sn = {
        backgroundImage: `url(${socialNetwork})`
    }
    const count = {
        backgroundImage: `url(${book_search})`
    }

    const projects = [
        {
            id: 1,
            style: todo,
            link: '',
            title: 'Todolist',
            technology: `React TS`
        },
        {
            id: 2,
            style: sn,
            link: '',
            title: 'Social Network',
            technology: `React TS`
        },
        {
            id: 3,
            style: count,
            link: 'https://tonybnk.github.io/book_search/',
            title: 'Book Search',
            technology: `React TS`
        },
    ];

    const projectsList = projects.map(project =>
        <Project
            id={project.id}
            style={project.style}
            link={project.link}
            title={project.title}
            technology={project.technology}
        />
    );

    return (
        <div className={c.projectsArea} id='projects'>
            <div className={c.projects}>
                <div className={c.container}>
                    <div className={c.titleRow}>
                        <div className={c.titleCol}>
                            <Slide bottom>
                                <div className={c.sectionTitle}>
                                    <h2>My Latest Projects</h2>
                                    <p>
                                        Here are a few projects I've worked on
                                        recently.
                                    </p>
                                </div>
                            </Slide>
                        </div>
                    </div>
                    <div className={c.descriptionRow}>
                        {projectsList}
                    </div>
                </div>
            </div>
        </div>
    );
}