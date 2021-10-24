import React from "react";
import c from "./Education.module.scss";
import Flip from 'react-reveal/Flip';


export const Education = () => {
    return (
        <Flip bottom>
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
        </Flip>
    )
}