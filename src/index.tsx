import './index.css';
import {rerenderEntireTree} from "./render";
import {state} from "./redux/state";

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
