import React from "react";
import c from "./Contacts.module.css";
import styles from '../../common/styles/Container.module.css'
import {Title} from "../../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={c.wishesBlock}>
            <div className={styles.container}>
                <Title text={'Contacts'}/>
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