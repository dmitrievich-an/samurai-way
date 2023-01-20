import {DialogPropsType, MessagePropsType, PostPropsType} from "../index";

export type MessagesPageType = {
  messages: MessagePropsType[]
  dialogs: DialogPropsType[]
}
export type ProfilePageType = {
  posts: PostPropsType[]

}
export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: MessagesPageType
}

export let state: StateType = {
  profilePage: {
    posts: [
      {id: 1, message: "Hi! How are you?", likesCount: 13},
      {id: 2, message: "It's my first post", likesCount: 11},
    ],
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