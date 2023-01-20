import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesPageType} from "../../redux/state";

type DialogsPropsType = {
  state: MessagesPageType
}

export function Dialogs(props: DialogsPropsType) {

  let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
  let messageElements = props.state.messages.map(m => <Message message={m.message}/>)

  return (
    <div className={s.dialogs}>
      <h2>Messages</h2>
      <ul className={s.dialogs__list}>
        {dialogsElements}
      </ul>
      <ul className={s.messages__list}>
        {messageElements}
      </ul>
    </div>
  );
}
