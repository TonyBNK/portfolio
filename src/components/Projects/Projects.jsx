import React from "react";
import {Project} from "./Project/Project";
import todolist from '../../assets/images/todolist.jpg';
import socialNetwork from '../../assets/images/socialNetwork.jpg';
import book_search from '../../assets/images/book.jpg';
import messenger from '../../assets/images/messenger.jpg';
import c from './Projects.module.scss';
import Slide from 'react-reveal/Slide';


export const Projects = () => {
    const todo = {
        backgroundImage: `url(${todolist})`
    }
    const sn = {
        backgroundImage: `url(${socialNetwork})`
    }
    const bs = {
        backgroundImage: `url(${book_search})`
    }
    const mes = {
        backgroundImage: `url(${messenger})`
    }

    const projects = [
        {
            id: 1,
            style: sn,
            link: 'https://github.com/TonyBNK/social_network_ts',
            title: 'Social Network',
            technology: 'React TS'
        },
        {
            id: 2,
            style: todo,
            link: 'https://github.com/TonyBNK/Todolist',
            title: 'Todolist',
            technology: 'React TS'
        },
        {
            id: 3,
            style: bs,
            link: 'https://github.com/TonyBNK/book_search',
            title: 'Book Search',
            technology: 'React TS'
        },
        {
            id: 4,
            style: mes,
            link: 'https://github.com/TonyBNK/middle.messenger.praktikum.yandex',
            title: 'Messenger',
            technology: 'TS'
        },
    ];

    const projectsList = projects.reverse().map(project =>
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
                                    <h2>Проекты</h2>
                                    <p>
                                        Здесь представлено несколько последних
                                        собственных проектов.
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
