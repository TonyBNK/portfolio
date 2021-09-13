import React from "react";
import c from "./Footer.module.css";

export const Footer = () => {
    return (
        <div className={c.footerBlock}>
            <div className={c.container}>
                <div className={c.header}>
                    <h2>Tony</h2>
                </div>
                <div className={c.body}>
                    <div className={c.form}>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                    </div>
                    <h4>©All rights reserved</h4>
                </div>
            </div>
        </div>
    );
}