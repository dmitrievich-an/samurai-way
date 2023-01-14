import React from 'react';
import s from './ProfileInfo.module.css';

export function ProfileInfo() {
  return (
    <div className={s.content}>
      <div className={s.wallpaper}></div>
      <div className={s.description}>
        ava + description
      </div>
    </div>
  );
}
