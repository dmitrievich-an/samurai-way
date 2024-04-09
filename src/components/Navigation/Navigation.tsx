import React from 'react';
import s from './Navigation.module.css'

export const Navigation = () => {
    return (
        <ul className={s.navigation}>
            <li className={s.navigation__item}><a href="#">Profile</a></li>
            <li className={s.navigation__item}><a href="#">Messages</a></li>
            <li className={s.navigation__item}><a href="#">News</a></li>
            <li className={s.navigation__item}><a href="#">Music</a></li>
            <li className={s.navigation__item}><a href="#">Settings</a></li>
        </ul>
    );
};
