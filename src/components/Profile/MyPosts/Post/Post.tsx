import React from 'react';
import s from "./Post.module.css";

type PostPropsType = {
  message: string
}

export function Post(props: PostPropsType) {
  return (
    <li className={s.posts_item}>
      <img className={s.avatar} src="https://media.2x2tv.ru/content/images/size/w1440h1080/2022/04/----5.jpg" alt=""/>
      <span className={s.username}>Username</span>
      <span className={s.text}>{props.message}</span>
      <button className={s.like}>like</button>
    </li>
  );
}