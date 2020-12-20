import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBKwXMMlZ9BlZSLYaJSSSqGeOFcZy8CzjU",
    authDomain: "petproject-3a9bd.firebaseapp.com",
    projectId: "petproject-3a9bd",
    storageBucket: "petproject-3a9bd.appspot.com",
    messagingSenderId: "498936679594",
    appId: "1:498936679594:web:63c3061a440387f77814d3",
    measurementId: "G-69L9WWCG9B"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }
    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;
