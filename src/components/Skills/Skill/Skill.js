import c from "./Skill.module.css";
import React from "react";


export const Skill = (
    {
        id,
        image,
        title,
        description
    }
) => {
    return (
        <div key={id} className={c.skill}>
            <div className={c.image}>
                <img src={image} alt="pic"/>
            </div>
            <div className={c.title}>
                <h3>{title}</h3>
            </div>
            <div className={c.description}>
                {description}
            </div>
        </div>
    );
}