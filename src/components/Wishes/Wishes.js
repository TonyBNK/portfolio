import React from "react";
import c from "./Wishes.module.css";
import styles from '../../common/styles/Container.module.css'

export const Wishes = () => {
    return (
        <div className={c.wishesBlock}>
            <div className={styles.container}>
                <div className={c.header}>
                    <h2>Looking for remote work</h2>
                </div>
                <div className={c.body}>
                    <button onClick={()=>alert('Thanks a lot ^_^')}>Hire me</button>
                </div>
            </div>
        </div>
    );
}