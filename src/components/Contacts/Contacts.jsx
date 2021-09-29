import React from "react";
import c from "./Contacts.module.scss";
import styles from '../../common/styles/Container.module.css'
import {Title} from "../../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={c.wishesBlock}>
            <div className={styles.container}>
                <Title text={'Contact me'}/>
                <div className={c.body}>
                    <div className={c.formContainer}>
                        <form>
                            <div className={c.inputContainer}>
                                <div className={c.formGroup}>
                                    <input
                                        type="text"
                                        name={'name'}
                                        placeholder={'Name*'}/>
                                </div>
                            </div>
                            <div className={c.inputContainer}>
                                <div className={c.formGroup}>
                                    <input
                                        type="text"
                                        name={'email'}
                                        placeholder={'E-mail*'}/>
                                </div>
                            </div>
                            <div className={c.inputContainer}>
                                <div className={c.formGroup}>
                                    <input
                                        type="text"
                                        name={'subject'}
                                        placeholder={'Subject'}/>
                                </div>
                            </div>
                            <div className={c.inputContainer}>
                                <div className={c.formGroup}>
                                <textarea
                                    id={'formMessage'}
                                    name={'message'}
                                    placeholder={'Type your message here*'}>

                                </textarea>
                                </div>
                            </div>
                            <button>
                                Send message
                            </button>
                        </form>
                    </div>
                    <div className={c.someText}>
                        <h4>Feel free to contact with me!</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Magni, ratione.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}