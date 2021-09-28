import React from "react";
import c from "./Title.module.scss";

export const Title = (
    {
        text
    }
) => {
    return (
        <div className={c.title}>
            <h2>{text}</h2>
        </div>
    )
}