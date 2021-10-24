import React from "react";
import c from "./Education.module.scss";
import Slide from 'react-reveal/Slide';


export const Education = () => {
    return (
        <Slide left>
            <div className={c.education}>
                <ul>
                    <li>
                        <div>
                            <b>IT-INCUBATOR</b> (2021)
                        </div>
                        React, Redux, Typescript, Rest, Git, Team development.
                    </li>
                    <li>
                        <div>
                            <b>ITVDN</b> (2020)
                        </div>
                        JavaScript for beginners, HTML & CSS.
                    </li>
                    <li>
                        <div>
                            <b>People's Friendship University
                                of Russia</b> (2019)
                        </div>
                        Financier & Lawyer.
                    </li>
                </ul>
            </div>
        </Slide>
    )
}