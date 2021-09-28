import React from "react";
import c from './AboutMe.module.scss';
import {Title} from "../../common/components/title/Title";
import styles from '../../common/styles/Container.module.css'

export const AboutMe = () => {
    return (
        <div className={c.mainBlock}>
            <div className={styles.container}>
                <Title text='Hello, i am Tony'/>
                <div className={c.body}>
                    <div className={c.greetings}>
                        <h4>Some words about me</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Magni, ratione.
                        </p>
                    </div>
                    <div className={c.photo}>

                    </div>
                </div>
            </div>
        </div>
    );
}