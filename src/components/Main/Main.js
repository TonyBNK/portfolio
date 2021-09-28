import React from "react";
import c from './Main.module.css';

export const Main = () => {
    return (
        <div className={c.mainBlock}>
            <div className={c.container}>
                <div className={c.greetings}>
                    <span>Hello there</span>
                    <h2>My name is Tony</h2>
                    <p>I am front-end developer</p>
                </div>
                <div className={c.photo}>

                </div>
            </div>
        </div>
    );
}