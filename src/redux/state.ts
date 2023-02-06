import {DialogPropsType, MessagePropsType, PostPropsType} from "../index";

let rerenderEntireTree = (state: StateType) => {
  console.log("State changed")
}

export type MessagesPageType = {
  messages: MessagePropsType[]
  dialogs: DialogPropsType[]
}
export type ProfilePageType = {
  posts: PostPropsType[]
  newPostsText: string

}
export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: MessagesPageType
}

export const state: StateType = {
  profilePage: {
    posts: [
      {id: 1, message: "Hi! How are you?", likesCount: 13},
      {id: 2, message: "It's my first post", likesCount: 11},
    ],
    newPostsText: ""
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: "Andrew"},
      {id: 2, name: "Dmitry"},
      {id: 3, name: "Svetlana"},
      {id: 4, name: "Valera"},
      {id: 5, name: "Viktor"},
    ],
    messages: [
      {id: 1, message: "Hi"},
      {id: 2, message: "How is your it-kamasutra?"},
      {id: 3, message: "Yo"},
      {id: 4, message: "Yo"},
      {id: 5, message: "Yo"},
    ],
  }
}

export const addPost = () => {
  const newPost: PostPropsType = {id: new Date().getTime(), message: state.profilePage.newPostsText, likesCount: 0};
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostsText = "";
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText: string) => {
  state.profilePage.newPostsText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer: (state: StateType) => void) => {
  rerenderEntireTree = observer
}