import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
  return (
    <div className={s.content}>
      <img className={s.wallpaper}
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGljYWwlMjBiZWFjaHxlbnwwfHwwfHw%3D&w=1000&q=80"
        alt="Пляж"/>
      <div className={s.content_wrapper}>
        <div>
          ava + description
        </div>
        <MyPosts/>
      </div>
    </div>
  );
}
