import React from 'react';
import s from './NewPost.module.css';
export function NewPost() {
  return (
      <div className={s.content}>
        <textarea className={s.post_text}></textarea>
        <button className={s.post_publish}>Add post</button>
      </div>
  );
}
