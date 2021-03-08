import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import firebase from 'firebase'

// THIS SHOULD BE YOUR SETTING FROM FIREBASE
// YOU CAN RETRIEVE THESE AFTER CREATING YOUR FIREBASE PROJECT

const config = {
  apiKey: "AIzaSyBCz256CNSFeln2k3FSeK7SilwS0vjvMJA",
  authDomain: "trsystem-74b56.firebaseapp.com",
  databaseURL: "https://trsystem-74b56.firebaseio.com",
  projectId: "trsystem-74b56",
  storageBucket: "trsystem-74b56.appspot.com",
  messagingSenderId: "1030006970470"
};

firebase.initializeApp(config);

ReactDOM.render(
  <BrowserRouter>
      <App/>

</BrowserRouter>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
