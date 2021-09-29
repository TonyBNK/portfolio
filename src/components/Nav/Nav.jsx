import React from "react";
import c from './Nav.module.scss';

export const Nav = () => {
    return (
        <div className={c.nav}>
            <div className={c.navItem}>
                <a href="">Start</a>
            </div>
            <div className={c.navItem}>
                <a href="">About me</a>
            </div>
            <div className={c.navItem}>
                <a href="">Skills</a>
            </div>
            <div className={c.navItem}>
                <a href="">Projects</a>
            </div>
            <div className={c.navItem}>
                <a href="">Contacts</a>
            </div>
        </div>
    );
}