import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostPropsType} from "../../../index";

type MyPostsPropsType = {
  posts: PostPropsType[]
  addPost: () => void
  newPostText: string
  updateNewPostText: (newText: string) => void
}

export function MyPosts(props: MyPostsPropsType) {

  const postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)

  const addPost = () => {
    props.addPost()
  };

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPostText(e.currentTarget.value)
  }

  return (
    <div className={s.content}>
      <h3>My posts</h3>
      <div className={s.newPost}>
        <textarea onChange={onPostChange}
                  className={s.post_text}
                  value={props.newPostText}/>
        <button onClick={addPost} className={s.post_publish}>Add post</button>
      </div>
      <ul className={s.posts_list}>
        {postsElements}
      </ul>
    </div>
  );
}
