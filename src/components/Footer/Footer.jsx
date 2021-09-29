import React from "react";
import c from "./Footer.module.scss";
import styles from '../../common/styles/Container.module.css'
import {Title} from "../../common/components/title/Title";
import telegram from '../../assets/icons/telegram.svg';
import whatsApp from '../../assets/icons/whatsapp.svg';
import instagram from '../../assets/icons/instagram.svg';
import gmail from '../../assets/icons/gmail.svg';

export const Footer = () => {
    return (
        <div className={c.footerBlock}>
            <div className={styles.container}>
                <Title text={'Tony'}/>
                <div className={c.body}>
                    <div className={c.logos}>
                        <img src={telegram} alt=""/>
                        <img src={whatsApp} alt=""/>
                        <img src={instagram} alt=""/>
                        <img src={gmail} alt=""/>
                    </div>
                    <h4>©All rights reserved</h4>
                </div>
            </div>
        </div>
    );
}