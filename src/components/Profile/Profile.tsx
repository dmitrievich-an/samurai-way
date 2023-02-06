import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

export type ProfilePropsType = {
  profilePage: ProfilePageType
  addPost: () => void
  updateNewPostText: (newText: string) => void
}

export function Profile(props: ProfilePropsType) {
  return (
    <div className={s.content}>
      <ProfileInfo/>
      <MyPosts posts={props.profilePage.posts}
               newPostText={props.profilePage.newPostsText}
               addPost={props.addPost}
               updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
}