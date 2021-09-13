import React from "react";
import c from './Header.module.css';
import {Nav} from "../Nav/Nav";

export const Header = () => {
    return (
        <div className={c.header}>
            <div className={c.container}>
                <Nav/>
            </div>
        </div>
    );
}