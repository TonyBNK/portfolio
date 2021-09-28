import c from "./Skill.module.scss";
import React from "react";


export const Skill = (
    {
        id,
        icon,
        title,
        description
    }
) => {
    return (
        <div key={id} className={c.skill}>
            <div className={c.image}>
                <img src={icon} alt="pic"/>
            </div>
            <div>
                <h4>{title}</h4>
            </div>
            <div className={c.description}>
                {description}
            </div>
        </div>
    );
}