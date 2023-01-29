import React from 'react';
import s from './NewPost.module.css';

export type NewPostPropsType = {
  name: string
  addPost: (message: string) => void
}

export function NewPost(props: NewPostPropsType) {

  const newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    if (newPostElement.current) {
      props.addPost(newPostElement.current.value)
    }
    // newPostElement.current?.value = "";
  };

  return (
    <div className={s.content}>
      <textarea ref={newPostElement} className={s.post_text}></textarea>
      <button onClick={addPost} className={s.post_publish}>{props.name}</button>
    </div>
  );
}