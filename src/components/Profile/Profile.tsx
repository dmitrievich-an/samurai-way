import React from 'react';
import './Profile.css'
import imgToProfile from '../../img-profile.jpg'
import avatarProfile from '../../account-avatar.svg'

export const Profile = () => {
    return (
        <div className="content">
            <div className="content__image-wrapper">
                <img className="content__image" src={ imgToProfile } alt="" />
            </div>
            <div className="content__profile">
                <div className="content__profile-photo">
                    <img src={avatarProfile} alt="" />
                </div>
                <div className="content__profile-info info">
                    <span className="info__name">Artem D.</span>
                    <span className="info__item">Date of Birth: 25 january</span>
                    <span className="info__item">City: Rostov-on-Don</span>
                    <span className="info__item">Eduaction: RSCRIIT</span>
                    <span className="info__item">WebSite: <a href="https://github.com/dmitrievich-an">dmitrievich-an</a></span>
                </div>
            </div>
            <div>
                <textarea></textarea>
                <button>send</button>
            </div>
            <div>
                <ul>
                    <li>post item</li>
                    <li>post item</li>
                    <li>post item</li>
                    <li>post item</li>
                    <li>post item</li>
                </ul>
            </div>
        </div>
    );
};
