import React from "react";
import c from './Experience.module.scss';
import Flip from 'react-reveal/Flip';


export const Experience = () => {
    return (
        <Flip bottom>
            <div className={c.experience}>
                <ul>
                    <li>
                        <div>
                            <b>ФГУП ГРЧЦ, Front-end разработчик</b> (03.2020 –
                            по настоящее время)
                        </div>
                        Разработка с нуля крупной цифровой платформы для
                        взаимодействия компании с государственным сектором (NDA).
                    </li>
                    <li>
                        <div>
                            <b>ИЦ КАМАЗ, Front-end разработчик</b> (11.2021 –
                            03.2022)
                        </div>
                        Разработка клиентской части приложения для
                        взаимодействия работников компании (NDA).
                    </li>
                </ul>
            </div>
        </Flip>
    )
}
