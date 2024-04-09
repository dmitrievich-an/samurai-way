import React from 'react';
import avatar from "../../../../account-avatar.svg";
import like from '../../../../like.svg'
import s from './Posts.module.css'

export type PostStatePropsType = {
    id: number
    data: string
    message: string
    likes: number
}

const postState: Array<PostStatePropsType> = [
    {
        id: 1,
        data: "15 Dec 2024 14:18",
        message: "quia et suscipit suscipit recusandae consequuntur expedita et" +
            " cum reprehenderit" +
            " molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
        likes: 27
    },
    {
        id: 2,
        data: "17 Dec 2024 13:09",
        message: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores" +
            " neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui" +
            " aperiam non debitis possimus qui neque nisi nulla",
        likes: 313
    },
    {
        id: 3,
        data: "21 Dec 2024 03:25",
        message: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem" +
            " doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et" +
            " velit aut",
        likes: 49
    },
]

export const Posts = () => {
    return (
        <ul>
            { postState.map(e => {
                return (
                    <li className={ s.post_item } key={ e.id }>
                        <img className={ s.avatar } src={ avatar } alt="" />
                        <span className={ s.message }>{ e.message }</span>
                        <span className={ s.data }>{ e.data }
                            <button>
                                <img className={ s.like } src={ like } alt="" />
                                { e.likes }
                            </button>
                        </span>

                    </li>
                )
            }) }
        </ul>
    );
};
