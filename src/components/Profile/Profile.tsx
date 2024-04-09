import React from 'react';
import s from './Profile.module.css'
import imgToProfile from '../../img-profile.jpg'
import avatarProfile from '../../account-avatar.svg'
import { MyPosts } from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.content__imageWrapper}>
                <img className={s.content__image} src={ imgToProfile } alt="" />
            </div>
            <div className={s.content__profile}>
                <div className={s.content__profilePhoto}>
                    <img src={avatarProfile} alt="" />
                </div>
                <div className={ `${s.content__profileInfo} ${s.info}` }>
                    <span className={s.info__name}>Artem D.</span>
                    <span className={s.info__item}>Date of Birth: 25 january</span>
                    <span className={s.info__item}>City: Rostov-on-Don</span>
                    <span className={s.info__item}>Eduaction: RSCRIIT</span>
                    <span className={s.info__item}>WebSite: <a href="https://github.com/dmitrievich-an">dmitrievich-an</a></span>
                </div>
            </div>
            <MyPosts/>
        </div>
    );
};
