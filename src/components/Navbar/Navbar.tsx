import React from 'react';
import s from './Navbar.module.css';

export function Navbar() {
  return (
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        <li className={`${s.nav__item} ${s.active}`}><a className={s.link} href="src/components#1">Profile</a></li>
        <li className={s.nav__item}><a className={s.link} href="src/components#1">Messages</a></li>
        <li className={s.nav__item}><a className={s.link} href="src/components#1">News</a></li>
        <li className={s.nav__item}><a className={s.link} href="src/components#1">Music</a></li>
        <li className={s.nav__item}><a className={s.link} href="src/components#1">Settings</a></li>
      </ul>
    </nav>
  );
}