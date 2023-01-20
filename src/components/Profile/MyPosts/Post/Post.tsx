import React, {useState} from 'react';
import s from "./Post.module.css";
import {PostPropsType} from "../../../../index";

export function Post(props: PostPropsType) {

  //добавление лайка
  let [like, setLike] = useState(props.likesCount)
  const addLike = () => {
    setLike(++like)
  }

  return (
    <li className={s.posts_item}>
      <img className={s.avatar} src="https://media.2x2tv.ru/content/images/size/w1440h1080/2022/04/----5.jpg" alt=""/>
      <span className={s.username}>Username</span>
      <span className={s.text}>{props.message}</span>
      <button onClick={addLike} className={s.like}>like {like}</button>
    </li>
  );
}
