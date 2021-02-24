import { rerenderEntireTree } from "../render";

let state = {
  profilePage : {
    posts: [
      {id: 1,message: " Hello , how are you!",count:15},
      {id: 2,message: " It's my first post!",count:18},
      {id: 3,message: " I want to be a programmer!",count:20},
      {id: 4,message: "I feel I can do it!",count:10},
    ],
  }, 
  dialogsPage  : {
    dialogs: [
      {id: 1,name: "Eduard"},
      {id: 2,name: "Armen"},
      {id: 3,name: "Vardan"},
      {id: 4,name: "Karen"},
      {id: 5,name: "Sargis"},
    ],
    
    messages: [
      {id: 1,message: "Hello!"},
      {id: 2,message: "How are you?"},
      {id: 3,message: "What is your name?"},
    ],
  },
  singersPage : {
     singers: [
        {id:'1',singer:'Michael Jackson'},
        {id:'2',singer:'Paul McCartney'},
        {id:'3',singer:'Stevie Wonder'}
      ],
      songs: [
        {id:"1",song:<a href="https://youtu.be/s3wNuru4U0I?t=2" target="_blank">We are the world</a>},
        {id:"2",song:<a href="https://youtu.be/6d5ST3tbPIU" target="_blank">Let it be</a>},
        {id:"3",song:<a href="https://youtu.be/1bGOgY1CmiU" target="_blank">I just called to say I love you</a>},
      ],
      
  }
     
      
}
 
export let addPost = (postmessage) => {
  let newPost = {
    id:5,
    message: postmessage,
    count:12,
  };
     state.profilePage.posts.push(newPost);
     rerenderEntireTree(state);
}

export let addMessage = (newName) => {
  let newMessage = {
    id:6,
    name:newName,
  }
  state.dialogsPage.dialogs.push(newMessage);
  rerenderEntireTree(state);
}
export let addSinger = (newName) => {
  let newSinger = {
    id:4,
    singer:newName,
  }
  state.singersPage.singers.push(newSinger);
  rerenderEntireTree(state);

}

export default state;