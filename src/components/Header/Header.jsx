import React from "react";
import c from './Header.module.scss';
import {Nav} from "./Nav/Nav";
import {BurgerNav} from "./BurgerNav/BurgerNav";


export const Header = () => {
    return (
        <header className={c.headerArea}>
            <div className={c.headerWrapper}>
                <Nav/>
                <BurgerNav/>
            </div>
        </header>
    )
}