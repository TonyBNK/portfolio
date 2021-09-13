import c from "./Project.module.css";
import React from "react";


export const Project = (
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
                <button onClick={() => alert('Hello there')}>Show</button>
            </div>
            <div className={c.title}>
                <h3>{title}</h3>
            </div>
            <span className={c.description}>
                {description}
            </span>
        </div>
    );
}