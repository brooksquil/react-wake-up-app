import { googleProvider, rebase } from '../config/constants';

// Create a user
export function auth (email, pw) {
    return rebase.initializedApp.auth().createUserWithEmailAndPassword (email, pw)
    .then((data) => {
        console.log("user created data", data);
        //call save user method
        saveUser(data);
    })
}


// Login User with email/password
export function login (email, pw) {
    return rebase.initializedApp.auth().signInWIthEmailAndPassword(email, pw)
}

// login with google
export function loginWithGoogle () {
    return rebase.initializedApp.auth().SignInWithPopup(googleProvider)
    .then((data) => {
        saveUser(data.user);
    });
}

// Logout User
export function logout () {
    return rebase.initializedApp.auth().signOut()
}


// reset password
export function resetPassword (email) {
    return rebase.initializedApp.auth().sendPasswordResetEmail(email)
  }

// Save user to be called in create user function

export function saveUser (user) {
    console.log("save user", user);
    return rebase.initializedApp.database().ref().child(`muusers/${user.uid}/info`)
      .set({
        email: user.email,
        uid: user.uid
      })
      .then(() => {
        
        return user;
      })
  }
  