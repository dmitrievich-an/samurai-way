import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
  name: string
  id: number
}

type MessageType = {
  message: string
}

function DialogItem(props: DialogItemType) {
  let path = "/dialogs/" + props.id
  return (
    <li className={s.dialogs__item}>
      <NavLink to={path} className={s.link} activeClassName={s.link_active}>{props.name}</NavLink>
    </li>
  );
}

function Message(props: MessageType) {
  return (
    <li className={s.messages__item}>{props.message}</li>
  );
}

export function Dialogs() {
  return (
    <div className={s.dialogs}>
      <h2>Dialogs</h2>
      <ul className={s.dialogs__list}>
        <DialogItem name={"Andrew"} id={1}/>
        <DialogItem name={"Dmitry"} id={2}/>
        <DialogItem name={"Svetlana"} id={3}/>
        <DialogItem name={"Valera"} id={4}/>
        <DialogItem name={"Viktor"} id={5}/>
      </ul>
      <ul className={s.messages__list}>
        <Message message={"Hi"}/>
        <Message message={"How is your it-kamasutra?"}/>
        <Message message={"Yo"}/>
      </ul>
    </div>
  );
}
