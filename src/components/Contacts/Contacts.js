import React from "react";
import c from "./Contacts.module.css";
import styles from '../../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={c.wishesBlock}>
            <div className={styles.container}>
                <div className={c.header}>
                    <h2>Contacts</h2>
                </div>
                <div className={c.body}>
                    <form action="">
                        <input type="text"/>
                        <input type="text"/>
                        <textarea>
                        </textarea>
                    </form>
                    <button onClick={() => alert('data was sent')}>Send</button>
                </div>
            </div>
        </div>
    );
}