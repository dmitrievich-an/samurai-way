import React from 'react';
import logo from "../../logo2.png";
import './Header.css'


export const Header: React.FC = () => {
    return (
        <div className="header">
            <img className="header__logo" src={ logo } alt="" />
        </div>
    );
};
