import c from "./Skill.module.scss";
import React from "react";


export const Skill = (
    {
        id,
        link,
        icon,
        title,
        description
    }
) => {
    return (
        <div key={id} className={c.skillArea}>
            <a href={link}>
                <div className={c.skill}>
                    <center>
                        <div className={c.icon}>
                            <img src={icon} alt="logo"/>
                        </div>
                        <div className={c.content}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    </center>
                </div>
            </a>
        </div>
    );
}