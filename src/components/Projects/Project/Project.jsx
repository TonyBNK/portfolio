import c from "./Project.module.scss";
import React from "react";
import Slide from 'react-reveal/Slide';


export const Project = (
    {
        id,
        style,
        link,
        title,
        technology
    }
) => {
    return (
        <Slide bottom>
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
                                {title}
                            </h4>
                            <div className={c.portfolioButton}>
                                <a
                                    href={link}
                                    target={'_blank'}
                                    rel="noreferrer"
                                >
                                    Обзор
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
}
