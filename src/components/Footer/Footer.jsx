import React from "react";
import c from "./Footer.module.scss";
import linkedin from "../../assets/icons/linkedin.svg.png";
import github from "../../assets/icons/github.png";
import codewars from "../../assets/icons/codewars.svg";
import telegram from "../../assets/icons/telegram.svg";
import Slide from 'react-reveal/Slide';


export const Footer = () => {
    return (
        <div className={c.footerArea}>
            <div className={c.wrapper}>
                <Slide left>
                    <div className={c.row}>
                        <div className={c.col}>
                            <div className={c.icons}>
                                <a
                                    href='https://www.linkedin.com/in/anton-borisenko-716713223/'
                                    target={'_blank'}
                                    rel="noreferrer"
                                >
                                    <img src={linkedin} alt="icon"/>
                                </a>
                                <a
                                    href="https://github.com/TonyBNK"
                                    target={'_blank'}
                                    rel="noreferrer"
                                >
                                    <img src={github} alt="icon"/>
                                </a>
                                <a
                                    href="https://www.codewars.com/users/Jimmy%20Rummy"
                                    target={'_blank'}
                                    rel="noreferrer"
                                >
                                    <img src={codewars} alt="icon"/>
                                </a>
                                <a
                                    href="https://t.me/jimmyrummy"
                                    target={'_blank'}
                                    rel="noreferrer"
                                >
                                    <img src={telegram} alt="icon"/>
                                </a>
                            </div>
                        </div>
                        <div className={c.col}>
                            <div className={c.text}>
                                <p>Copyright © 2021. All Rights
                                    Reserved.</p>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    );
}