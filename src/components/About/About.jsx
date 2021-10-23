import React from "react";
import c from './About.module.scss';


export const About = () => {
    return (
        <div className={c.about}>
            <div className={c.aboutArea}>
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
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Beatae, unde!
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
                                                            <ul>
                                                                <li>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet,
                                                                    consectetur
                                                                    adipisicing
                                                                    elit.
                                                                    Dolorum,
                                                                    ullam.
                                                                </li>
                                                                <li>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet,
                                                                    consectetur
                                                                    adipisicing
                                                                    elit.
                                                                    Dolorum,
                                                                    ullam.
                                                                </li>
                                                                <li>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet,
                                                                    consectetur
                                                                    adipisicing
                                                                    elit.
                                                                    Dolorum,
                                                                    ullam.
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div></div>
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