import React from "react";
import c from "./Contact.module.scss";
import Slide from 'react-reveal/Slide';
import {useFormik} from 'formik';
import {contactAPI} from "../../api/api";


const styles = {
    styleLabel: (floatDirection) => ({
        float: floatDirection,
        width: '48%',
        position: 'relative'
    }),
    errorBorderStyle: {
        border: '2px solid red'
    },
    errorMessageStyle: {
        color: 'red',
        position: 'absolute',
        bottom: 0,
        left: 0
    }
}

export const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        validate: (values) => {
            const errors = {};
            if (!values.name) {
                errors.name = 'Name is required!';
            }

            if (!values.email) {
                errors.email = 'Email is required!';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address!';
            }

            return errors;
        },
        onSubmit: async (values) => {
            const messageData = {
                name: values.name,
                email: values.email,
                subject: values.subject,
                message: values.message
            }

            await contactAPI.sendMessage(messageData);

            formik.resetForm();
        },
    });

    const [nameError, emailError] = [
        formik.touched.name && formik.errors.name,
        formik.touched.email && formik.errors.email
    ];

    return (
        <div className={c.contactArea} id='contact'>
            <div className={c.contact}>
                <div className={c.container}>
                    <center>
                        <div className={c.col}>
                            <Slide bottom>
                                <div className={c.sectionTitle}>
                                    <h2>Контакты</h2>
                                    <p>
                                        Рассматриваю варианты удалённой работы с полной занятостью.
                                        <br/>
                                        Свяжитесь со мной по почте <a
                                        href="mailto:borisenk-anton@yandex.ru"
                                        target={'_blank'}
                                        rel="noreferrer"
                                    >
                                        borisenk-anton@yandex.ru
                                    </a> или телеграмму.
                                    </p>
                                </div>
                            </Slide>
                            <Slide bottom>
                                <div className={c.formWrapper}>
                                    <form onSubmit={formik.handleSubmit}>
                                        <label
                                            style={styles.styleLabel('left')}>
                                            <input
                                                type="text"
                                                {...formik.getFieldProps('name')}
                                                placeholder='Your Name *'
                                                style={nameError && styles.errorBorderStyle}
                                            />
                                            {
                                                nameError
                                                    ? <div
                                                        style={styles.errorMessageStyle}>
                                                        {formik.errors.name}
                                                    </div>
                                                    : null
                                            }
                                        </label>
                                        <label
                                            style={styles.styleLabel('right')}>
                                            <input
                                                type="email"
                                                {...formik.getFieldProps('email')}
                                                placeholder='Your Email *'
                                                style={emailError && styles.errorBorderStyle}
                                            />
                                            {
                                                emailError
                                                    ? <div
                                                        style={styles.errorMessageStyle}>
                                                        {formik.errors.email}
                                                    </div>
                                                    : null
                                            }
                                        </label>
                                        <label>
                                            <input
                                                type="text"
                                                {...formik.getFieldProps('subject')}
                                                placeholder='Write a Subject'
                                            />
                                        </label>
                                        <label>
                                        <textarea
                                            {...formik.getFieldProps('message')}
                                            placeholder='Your Message'
                                        />
                                        </label>
                                        <button>Submit</button>
                                    </form>
                                </div>
                            </Slide>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    );
}
