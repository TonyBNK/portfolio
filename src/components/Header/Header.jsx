import React from "react";
import c from './Header.module.scss';
import cat from '../../assets/icons/cat.png'


export const Header = () => {
    return (
        <header className={c.headerArea}>
            <div className={c.headerWrapper}>
                <div className={c.headerLeft}>
                    <div className={c.logo}>
                        <img src={cat} alt="logo"/>
                    </div>
                    <nav className={c.mainMenuNav}>
                        <ul className={c.mainMenu}>
                            <li className={c.isCurrent}>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}