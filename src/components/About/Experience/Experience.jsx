import React from "react";
import c from './Experience.module.scss';
import Slide from 'react-reveal/Slide';


export const Experience = () => {
    return (
        <Slide left>
            <div className={c.experience}>
                <ul>
                    <li>
                        <div>
                            <b>Freelance, Front-end developer</b> (03.2021 –
                            Present)
                        </div>
                        React development using redux and other libraries, work
                        with Hooks and TypeScript.
                    </li>
                    <li>
                        <div>
                            <b>GRFC, Leading specialist</b> (2019 – Present)
                        </div>
                        Participation in solving organizational issues,
                        execution of the duties of the head of the department
                    </li>
                    <li>
                        <div>
                            <b>Raiffeisenbank & HCC Omega, Customer Service
                                Specialist</b> (2016 – 2019)
                        </div>
                        Servicing of individuals, legal entities, foreign
                        citizens.
                    </li>
                </ul>
            </div>
        </Slide>
    )
}