import React from "react";
import c from './Home.module.scss';


export const Home = () => {
    return (
        <div className={c.home}>
            <div className={c.sliderWrapper}>
                <div className={c.personalPortfolioSlider}>
                    <div className={c.container}>
                        <div className={c.row}>
                            <div className={c.col}>
                                <div className={c.inner}>
                                    <span>Welcome to my World</span>
                                    <h1>
                                        Hi, I am Anton
                                    </h1>
                                    <h2>
                                        Front-end developer
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}