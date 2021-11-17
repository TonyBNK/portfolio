import React, {useState} from "react";
import c from './BurgerNav.module.scss';
import {Link} from 'react-scroll';
import burger from '../../../assets/icons/hamburger.png';


export const BurgerNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onBurgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className={c.mainMenuBurgerNav}>
            <div className={c.burgerBtn} onClick={onBurgerClick}>
                <img src={burger} alt=""/>
            </div>
            <ul className={isMenuOpen ? `${c.mainMenu} ${c.show}` : `${c.mainMenu}`}>
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
        </div>
    )
}
