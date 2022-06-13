import React from "react";
import c from "./Education.module.scss";
import Flip from 'react-reveal/Flip';


export const Education = () => {
    return (
        <Flip bottom>
            <div className={c.education}>
                <ul>
                    <li>
                        <div>
                            <b>Яндекс.Практикум</b> (2020)
                        </div>
                        Middle Frontend-developer
                    </li>
                    <li>
                        <div>
                            <b>РУДН</b> (2019)
                        </div>
                        Экономист, финансы и кредит
                    </li>
                </ul>
            </div>
        </Flip>
    )
}
