import React from 'react';
import s from './MyPosts.module.css';
import {NewPost} from "./NewPost/NewPost";
import {Post} from "./Post/Post";
import {PostPropsType} from "../../../index";

type MyPostsPropsType = {
    posts: PostPropsType[]
}

export function MyPosts(props: MyPostsPropsType) {

  let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

  return (
    <div className={s.content}>
      <h3>My posts</h3>
      <NewPost/>
      <ul className={s.posts_list}>
        {postsElements}
      </ul>
    </div>
  );
}
