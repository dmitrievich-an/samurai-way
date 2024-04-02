import React from 'react';
import './Navigation.css'

export const Navigation = () => {
    return (
        <ul className="navigation">
            <li className="navigation__item"><a href="#">Profile</a></li>
            <li className="navigation__item"><a href="#">Messages</a></li>
            <li className="navigation__item"><a href="#">News</a></li>
            <li className="navigation__item"><a href="#">Music</a></li>
            <li className="navigation__item"><a href="#">Settings</a></li>
        </ul>
    );
};
