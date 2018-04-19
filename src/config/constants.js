import Rebase from 're-base';
import firebase from 'firebase';

// firebase creds

const app = firebase.initializeApp({
    apiKey: "AIzaSyApWY-08yejFLbbQ78Z5mMwQ57ISXhceM4",
    authDomain: "react-wake-up-app.firebaseapp.com",
    databaseURL: "https://react-wake-up-app.firebaseio.com"
});

export const rebase = Rebase.createClass(app.database());

export const googleProvider = new firebase.auth.GoogleAuthProvider();