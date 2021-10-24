import React from "react";
import c from './Header.module.scss';
import { Link, animateScroll as scroll} from 'react-scroll'


export const Header = () => {
    return (
        <header className={c.headerArea}>
            <div className={c.headerWrapper}>
                    <nav className={c.mainMenuNav}>
                        <ul className={c.mainMenu}>
                            <li>
                                <Link activeClass={c.isCurrent}
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link activeClass={c.isCurrent}
                                      to="about"
                                      spy={true}
                                      smooth={true}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link activeClass={c.isCurrent}
                                      to="skills"
                                      spy={true}
                                      smooth={true}
                                >
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link activeClass={c.isCurrent}
                                      to="projects"
                                      spy={true}
                                      smooth={true}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link activeClass={c.isCurrent}
                                      to="contact"
                                      spy={true}
                                      smooth={true}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
            </div>
        </header>
    )
}