import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC0mFNISyJP2Sn_97ZySno9XAbD1XQHZUU",
    authDomain: "royal-db-a2fb0.firebaseapp.com",
    databaseURL: "https://royal-db-a2fb0.firebaseio.com",
    projectId: "royal-db-a2fb0",
    storageBucket: "royal-db-a2fb0.appspot.com",
    messagingSenderId: "208748193861",
    appId: "1:208748193861:web:572a44b55518c3d5fa1b2c"
  };

firebase.initializeApp(config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    else {
        
    }
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;