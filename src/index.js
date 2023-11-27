import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
//import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

//serviceWorker.unregister();
/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from 'firebase/app'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPGTwpIVbFBp8M0sC-_QDYDX-WfWK-sUg",
  authDomain: "chatback2-b7689.firebaseapp.com",
  databaseURL: "https://chatback2-b7689-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chatback2-b7689",
  storageBucket: "chatback2-b7689.appspot.com",
  messagingSenderId: "855137612360",
  appId: "1:855137612360:web:70914cd021113bacc05e7d",
  measurementId: "G-93DT588386"
};

initializeApp(firebaseConfig)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
