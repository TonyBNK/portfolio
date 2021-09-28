import React from "react";
import c from "./Wishes.module.css";
import styles from '../../common/styles/Container.module.css'
import {Title} from "../../common/components/title/Title";

export const Wishes = () => {
    return (
        <div className={c.wishesBlock}>
            <div className={styles.container}>
                <Title text={'Looking for remote work'}/>
                <div className={c.body}>
                    <button onClick={()=>alert('Thanks a lot ^_^')}>Hire me</button>
                </div>
            </div>
        </div>
    );
}