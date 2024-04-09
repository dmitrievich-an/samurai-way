import React from 'react';
import { Posts } from "./Posts/Posts";

export const MyPosts = () => {
    return (
        <>
            <div>
                <h2>My Posts</h2>
                <textarea></textarea>
                <button>send</button>
            </div>
            <Posts/>
        </>
    );
};
