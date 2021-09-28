import React from "react";
import c from './Nav.module.scss';

export const Nav = () => {
    return(
        <div className={c.nav}>
            <a href="">Start</a>
            <a href="">About me</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    );
}