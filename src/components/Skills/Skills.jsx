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
            description: `Мультипарадигменный язык программирования. Является реализацией спецификации ECMAScript.`
        },
        {
            id: 2,
            icon: tsIcon,
            link: 'https://www.typescriptlang.org/',
            title: 'TypeScript',
            description: 'Строготипизированный язык программирования, расширяющий возможности JavaScript.'
        },
        {
            id: 3,
            icon: reactIcon,
            link: 'https://ru.reactjs.org',
            title: 'React',
            description: 'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.'
        },
        {
            id: 4,
            icon: reduxIcon,
            link: 'https://redux.js.org/',
            title: 'Redux',
            description: 'Инструмент для управления состоянием данных и пользовательским интерфейсом в приложениях JavaScript с большим количеством сущностей.'
        },
        {
            id: 5,
            icon: htmlIcon,
            link: 'https://developer.mozilla.org/ru/docs/Learn/HTML/Introduction_to_HTML/Getting_started',
            title: 'HTML',
            description: 'Стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере.'
        },
        {
            id: 6,
            icon: cssIcon,
            link: 'https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics',
            title: 'CSS',
            description: 'Формальный язык описания внешнего вида веб-страницы, написанной с использованием языка разметки HTML.'
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
        <div className={c.skillsArea} id='skills'>
            <div className={c.skills}>
                <div className={c.container}>
                    <div className={c.titleRow}>
                        <div className={c.titleCol}>
                            <div className={c.sectionTitle}>
                                <Slide bottom>
                                    <h2>Навыки</h2>
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
