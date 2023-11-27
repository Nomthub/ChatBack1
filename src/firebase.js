/*import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import * as firebase from "./firebase";
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let config = {
    apiKey: "AIzaSyCPGTwpIVbFBp8M0sC-_QDYDX-WfWK-sUg",
    authDomain: "chatback2-b7689.firebaseapp.com",
    databaseURL: "https://chatback2-b7689-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chatback2-b7689",
    storageBucket: "chatback2-b7689.appspot.com",
    messagingSenderId: "855137612360",
    appId: "1:855137612360:web:70914cd021113bacc05e7d",
    measurementId: "G-93DT588386"
  };

  firebase.initializeApp(config);

  export default firebase.database();
  */
 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  //import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCPGTwpIVbFBp8M0sC-_QDYDX-WfWK-sUg",
    authDomain: "chatback2-b7689.firebaseapp.com",
    projectId: "chatback2-b7689",
    storageBucket: "chatback2-b7689.appspot.com",
    messagingSenderId: "855137612360",
    appId: "1:855137612360:web:70914cd021113bacc05e7d",
    measurementId: "G-93DT588386"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);