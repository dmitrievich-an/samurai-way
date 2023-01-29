import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

export type ProfilePropsType = {
  state: ProfilePageType
  addPost: (message: string) => void
}

export function Profile(props: ProfilePropsType) {
  return (
    <div className={s.content}>
      <ProfileInfo/>
      <MyPosts posts={props.state.posts} addPost={props.addPost}/>
    </div>
  );
}