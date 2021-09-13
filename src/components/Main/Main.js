import React from "react";
import c from './Main.module.css';

export const Main = () => {
    return (
        <div className={c.mainBlock}>
            <div className={c.container}>
                <div className={c.greetings}>
                    <span>Hello there</span>
                    <h1>My name is Tony</h1>
                    <p>I am front-end developer</p>
                </div>
                <div className={c.photo}>

                </div>
            </div>
        </div>
    );
}