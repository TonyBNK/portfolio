import React, {useState} from "react";
import c from './About.module.scss';
import {Experience} from "./Experience/Experience";
import Slide from 'react-reveal/Slide';
import {Education} from "./Education/Education";
import ava from '../../assets/images/ava.jpg';


export const About = () => {
    const [isExpChosen, setIsExpChosen] = useState(true);

    const onExperienceClick = () => {
        setIsExpChosen(true);
    }

    const onEducationClick = () => {
        setIsExpChosen(false);
    }

    return (
        <div className={c.aboutArea} id='about'>
            <div className={c.about}>
                <div className={c.container}>
                    <div className={c.row}>
                        <div className={c.col}>
                            <div className={c.sectionTitle}>
                                <Slide bottom>
                                    <h2>Обо мне</h2>
                                </Slide>
                                <Slide bottom>
                                    <div>
                                        <div className={c.infoRow}>
                                            <div className={c.infoCol1}>
                                                <div className={c.thumbnail}>
                                                    <img src={ava} alt="About"/>
                                                </div>
                                            </div>
                                            <div className={c.infoCol2}>
                                                <p>
                                                    Front-end разработчик с
                                                    опытом создания SPA
                                                    приложений при использовании
                                                    React.
                                                    <br/>
                                                    Люблю учиться и
                                                    совершенствовать свои
                                                    навыки. Выполняю
                                                    самостоятельные проекты.
                                                    Решаю задачки на CodeWars.
                                                    В ближайшем будущем планирую
                                                    глубже
                                                    освоить NodeJS.
                                                    <br/>
                                                    В свободное время люблю
                                                    путешествовать. Спортсмен.
                                                    Сериальный фанат.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className={c.experienceEducationRow}>
                                            <div className={c.tabsContainer}>
                                                <div className={c.tabsRow}>
                                                    <div className={c.tabsCol}>
                                                        <div>
                                                            <ul>
                                                                <li
                                                                    className={`${isExpChosen ? c.active : ''}`}
                                                                    onClick={onExperienceClick}
                                                                >
                                                                    Опыт работы
                                                                </li>
                                                                <li
                                                                    className={`${isExpChosen ? '' : c.active}`}
                                                                    onClick={onEducationClick}
                                                                >
                                                                    Образование
                                                                </li>
                                                            </ul>
                                                            <div
                                                                className={c.singleTabContent}>
                                                                {
                                                                    isExpChosen
                                                                        ?
                                                                        <Experience/>
                                                                        :
                                                                        <Education/>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
