import React from "react";
import c from './Nav.module.scss';
import {Link} from 'react-scroll';


export const Nav = () => {
    return (
        <nav className={c.mainMenuNav}>
            <ul className={c.mainMenu}>
                <li>
                    <Link activeClass={c.isCurrent}
                          to="home"
                          spy={true}
                          smooth={true}
                    >
                        Главная
                    </Link>
                </li>
                <li>
                    <Link activeClass={c.isCurrent}
                          to="about"
                          spy={true}
                          smooth={true}
                    >
                        Обо мне
                    </Link>
                </li>
                <li>
                    <Link activeClass={c.isCurrent}
                          to="skills"
                          spy={true}
                          smooth={true}
                    >
                        Навыки
                    </Link>
                </li>
                <li>
                    <Link activeClass={c.isCurrent}
                          to="projects"
                          spy={true}
                          smooth={true}
                    >
                        Проекты
                    </Link>
                </li>
                <li>
                    <Link activeClass={c.isCurrent}
                          to="contact"
                          spy={true}
                          smooth={true}
                    >
                        Контакты
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
