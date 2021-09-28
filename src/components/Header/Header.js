import React from "react";
import c from './Header.module.scss';
import {Nav} from "../Nav/Nav";
import titleImage from "../../assets/images/intro3.jpeg";

export const Header = () => {
    const intro = {
        backgroundImage: `url(${titleImage})`
    }

    return (
        <div className={c.container} style={intro}>
            <div className={c.header}>
                <div className={c.nav}>
                    <Nav/>
                </div>
            </div>
        </div>
    );
}