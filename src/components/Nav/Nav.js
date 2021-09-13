import React from "react";
import c from './Nav.module.css';

export const Nav = () => {
    return(
        <div className={c.nav}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    );
}