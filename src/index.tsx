import './index.css';
import {state, subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

export type PostPropsType = {
  id: number
  message: string
  likesCount: number
}
export type DialogPropsType = {
  id: number
  name: string
}
export type MessagePropsType = {
  id: number
  message: string
}



rerenderEntireTree(state);
subscribe(rerenderEntireTree);