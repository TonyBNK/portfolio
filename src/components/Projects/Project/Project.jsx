import c from "./Project.module.scss";
import React from "react";


export const Project = (
    {
        id,
        style,
        title,
        description
    }
) => {
    return (
        <div key={id} className={c.project}>
            <div className={c.image} style={style}>
                <button onClick={() => alert('Hello there')}>Show</button>
            </div>
            <div>
                <h4>{title}</h4>
            </div>
            <span className={c.description}>
                {description}
            </span>
        </div>
    );
}