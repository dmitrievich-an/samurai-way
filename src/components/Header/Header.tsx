import React from 'react';
import logo from "../../logo.png";
import s from './Header.module.css';
export function Header() {
  return (
    <header className={s.header}>
      <img src={logo} alt="Логотип"/>
    </header>
  );
}