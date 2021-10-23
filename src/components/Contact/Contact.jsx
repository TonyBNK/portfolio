import React from "react";
import c from "./Contact.module.scss";


export const Contact = () => {
    return (
        <div className={c.contactArea}>
            <div className={c.contact}>
                <div className={c.container}>
                    <center>
                        <div className={c.col}>
                            <div className={c.sectionTitle}>
                                <h2>Hire Me.</h2>
                                <p>
                                    I am available for full time, part time and
                                    freelance work.
                                    Connect with me via
                                    email: <a
                                    href="mailto:borisenk-anton@yandex.ru"
                                    target={'_blank'}
                                    rel="noreferrer"
                                >
                                        borisenk-anton@yandex.ru
                                    </a>
                                </p>
                            </div>
                            <div className={c.formWrapper}>
                                <form>
                                    <label
                                        htmlFor=" item01"
                                        style={{
                                            float: 'left',
                                            width: '48%'
                                        }}
                                    >
                                        <input
                                            type=" text"
                                            name='name'
                                            id='item01'
                                            placeholder='Your Name *'
                                        />
                                    </label>
                                    <label
                                        htmlFor=" item02"
                                        style={{
                                            float: 'right',
                                            width: '48%'
                                        }}
                                    >
                                        <input
                                            type=" email"
                                            name='email'
                                            id='item02'
                                            placeholder='Your email *'
                                        />
                                    </label>
                                    <label htmlFor=" item03">
                                        <input
                                            type=" text"
                                            name='subject'
                                            id='item03'
                                            placeholder='Write a Subject'
                                        />
                                    </label>
                                    <label htmlFor=" item04">
                                        <textarea
                                            name=" message"
                                            id=" item04"
                                            placeholder='Your Message'
                                        />
                                    </label>
                                    <button>Submit</button>
                                </form>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    );
}