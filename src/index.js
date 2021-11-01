import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyD_psJMhGZObEjSrcKVew2MhCdrT2Fp-vk",
  authDomain: "cherry-chat-1cff3.firebaseapp.com",
  projectId: "cherry-chat-1cff3",
  storageBucket: "cherry-chat-1cff3.appspot.com",
  messagingSenderId: "114449549183",
  appId: "1:114449549183:web:56dccc21a13faff4bc7c4a",
  measurementId: "G-F8H1QBZD5Q"
});

export const Context = React.createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();



ReactDOM.render(
  <Context.Provider value = {{
    firebase,
    auth,
    firestore,
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
