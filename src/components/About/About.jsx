import React from "react";
import c from './About.module.scss';
import {Experience} from "./Experience/Experience";


export const About = () => {
    return (
        <div className={c.aboutArea}>
            <div className={c.about}>
                <div className={c.container}>
                    <div className={c.row}>
                        <div className={c.col}>
                            <div className={c.sectionTitle}>
                                <h2>About Me</h2>
                                <div>
                                    <div className={c.infoRow}>
                                        <div className={c.infoCol1}>
                                            <div className={c.thumbnail}>
                                                <img src="" alt="About"/>
                                            </div>
                                        </div>
                                        <div className={c.infoCol2}>
                                            <p>
                                                I am Front-end developer with
                                                experience in creating SPA using
                                                React, Redux, JS, HTML, CSS. My
                                                free time is
                                                dedicated to Codewars, improving
                                                my English skills and becoming
                                                familiar with NodeJS. In the
                                                future I
                                                see myself as a Full Stack
                                                Developer.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={c.experienceEducationRow}>
                                        <div className={c.tabsContainer}>
                                            <div className={c.tabsRow}>
                                                <div className={c.tabsCol}>
                                                    <div>
                                                        <ul>
                                                            <li className={`${c.active}`}>
                                                                Experience
                                                            </li>
                                                            <li className={``}>
                                                                Education
                                                            </li>
                                                        </ul>
                                                        <div
                                                            className={c.singleTabContent}>
                                                            <Experience/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}