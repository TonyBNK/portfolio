import c from "./Project.module.scss";
import React from "react";


export const Project = (
    {
        id,
        style,
        title,
        technology,
        description
    }
) => {
    return (
        <div key={id} className={c.projectArea}>
            <div className={c.project}>
                <div className={c.thumbnail}>
                    <div className={c.thumbnailImg} style={style}>

                    </div>
                </div>
                <div className={c.content}>
                    <div className={c.inner}>
                        <p>{technology}</p>
                        <h4>
                            <a href="">{title}</a>
                        </h4>
                        <div className={c.portfolioButton}>
                            <a href="">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}