import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

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


ReactDOM.render(
  <BrowserRouter>
    <App state={state}/>
  </BrowserRouter>,
  document.getElementById('root')
);