import React from "react";
import c from "./Contact.module.scss";
import Slide from 'react-reveal/Slide';
import {useFormik} from 'formik';


export const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        validate: (values) => {
            // const errors = {};
            // if (!values.email) {
            //     errors.email = 'Required';
            // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            //     errors.email = 'Invalid email address';
            // }
            //
            // if (!values.password) {
            //     errors.password = 'Required';
            // } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{3,}$/.test(values.password)) {
            //     errors.password = 'Invalid password';
            // }
            //
            // return errors;
        },
        onSubmit: async (values, formikHelpers) => {
            alert(`Name: ${values.name}, Email: ${values.email}, Subject: ${values.subject}, Message: ${values.message}`);
            // const action = await dispatch(authActions.logIn(values));
            // if (authActions.logIn.rejected.match(action)) {
            //     if (action.payload?.fieldsErrors?.length) {
            //         formikHelpers.setFieldError(
            //             action.payload.fieldsErrors[0].field,
            //             action.payload.fieldsErrors[0].error
            //         );
            //     }
            // }
        },
    });

    return (
        <div className={c.contactArea} id='contact'>
            <div className={c.contact}>
                <div className={c.container}>
                    <center>
                        <div className={c.col}>
                            <Slide bottom>
                                <div className={c.sectionTitle}>
                                    <h2>Hire Me</h2>
                                    <p>
                                        I am available for full time, part time
                                        and
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
                            </Slide>
                            <Slide bottom>
                                <div className={c.formWrapper}>
                                    <form onSubmit={formik.handleSubmit}>
                                        <label htmlFor="item01"
                                               style={{
                                                   float: 'left',
                                                   width: '48%'
                                               }}>
                                            <input
                                                type="text"
                                                id='item01'
                                                {...formik.getFieldProps('name')}
                                                placeholder='Your Name *'
                                            />
                                        </label>
                                        <label htmlFor="item02"
                                               style={{
                                                   float: 'right',
                                                   width: '48%'
                                               }}>
                                            <input
                                                type="email"
                                                id='item02'
                                                {...formik.getFieldProps('email')}
                                                placeholder='Your email *'
                                            />
                                        </label>
                                        <label htmlFor="item03">
                                            <input
                                                type="text"
                                                id='item03'
                                                {...formik.getFieldProps('subject')}
                                                placeholder='Write a Subject'
                                            />
                                        </label>
                                        <label htmlFor="item04">
                                        <textarea
                                            id="item04"
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
