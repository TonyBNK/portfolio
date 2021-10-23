import React from "react";
import c from './About.module.scss';


export const About = () => {
    return (
        <div className={c.about}>
            <div className={c.aboutArea}>
                <div className={c.aboutWrapper}>
                    <div className={c.container}>
                        <div className={c.row}>
                            <div className={c.col}>
                                <div className={c.inner}>
                                    <div className={c.sectionTitle}>
                                        <h2 className={c.title}>About Me</h2>
                                        <div>
                                            <div className={c.infoRow}>
                                                <div className={c.infoCol1}>
                                                    <div className={c.thumbnail}>
                                                        <img src="" alt="About"/>
                                                    </div>
                                                </div>
                                                <div className={c.infoCol2}>
                                                    <p className={c.description}>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, unde!
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={c.experienceEducationRow}>
                                                <div>
                                                    <div className={c.tabsArea}>
                                                        <div className={c.tabsContainer}>
                                                            <div className={c.tabsRow}>
                                                                <div className={c.tabsCol}>
                                                                    <div className={c.reactTabs}>
                                                                        <ul className={c.tabStyle}>
                                                                            <li className={c.experience}>
                                                                                Experience
                                                                            </li>
                                                                            <li className={c.education}>
                                                                                Education
                                                                            </li>
                                                                        </ul>
                                                                        <div></div>
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
                    </div>
                </div>
            </div>
        </div>
    );
}