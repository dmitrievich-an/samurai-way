import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
  name: string
  id: number
}

export function DialogItem(props: DialogItemType) {
  let path = "/dialogs/" + props.id
  return (
    <li className={s.dialogs__item}>
      <NavLink to={path} className={s.link} activeClassName={s.link_active}>{props.name}</NavLink>
    </li>
  );
}