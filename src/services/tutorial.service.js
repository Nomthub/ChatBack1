//import * as firebase from "firebase";
//import {firebase} from "firebase/compat/app";
//import * as firebase from "firebase/app";
import { firebase } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
//import {db} from '../firebase';
const db = firebase.ref("/tutorials");

class TutorialDataService{
    getAll(){
        return db;
    }

    create(tutorial){
        return db.push(tutorial);
    }

    update(key, value){
        return db.child(key).update(value);
    }

    delete(key){
        return db.child(key).remove();
    }

    deleteAll(){
        return db.remove();
    }
}

export default new TutorialDataService();