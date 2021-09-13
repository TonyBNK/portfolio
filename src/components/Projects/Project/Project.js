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