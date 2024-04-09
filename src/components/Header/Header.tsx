import React from 'react';
import logo from "../../logo2.png";
import s from './Header.module.css'


export const Header: React.FC = () => {
    return (
        <div className={s.header}>
            <img className={s.header__logo} src={ logo } alt="" />
            <span className={s.header__name}>Followr</span>
        </div>
    );
};
