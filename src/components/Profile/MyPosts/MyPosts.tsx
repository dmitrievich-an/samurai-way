import React from 'react';
import s from './MyPosts.module.css';
import {NewPost} from "./NewPost/NewPost";
import {Post} from "./Post/Post";

export function MyPosts() {
  return (
    <div>
      My posts
      <NewPost/>
      <ul className={s.posts_list}>
        <Post message="Hi! How are you?"/>
        <Post message="It is my first post"/>
      </ul>
    </div>
  );
}
