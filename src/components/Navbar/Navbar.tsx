import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export function Navbar() {
  return (
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        <li className={s.nav__item}>
          <NavLink to="/profile" className={s.link} activeClassName={s.link_active}>Profile</NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="/dialogs" className={s.link} activeClassName={s.link_active}>Messages</NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="/news" className={s.link} activeClassName={s.link_active}>News</NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="/music" className={s.link} activeClassName={s.link_active}>Music</NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="/settings" className={s.link} activeClassName={s.link_active}>Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
}