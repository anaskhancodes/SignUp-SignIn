// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAY0m-1qIdIEArkUcHXsxtjetM4xJeb0_c",
    authDomain: "signup-signin-for-linkedin.firebaseapp.com",
    projectId: "signup-signin-for-linkedin",
    storageBucket: "signup-signin-for-linkedin.appspot.com",
    messagingSenderId: "403760147279",
    appId: "1:403760147279:web:0ba28aee82a55c5c7eb33a",
    measurementId: "G-186K9B6M04"
});



const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


const signUp = () => {

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    console.log("email =>", email, "password =>", password)



    firebase.auth().createUserWithEmailAndPassword( email, password)
        .then((result) => {
            // Signed in 
            window.location.href = "welcome.html"
            // ...
        })
        .catch((error) => {
            alert("Invalid Email")
            console.log(error.code);
            console.log(error.message);
            // ..
        });
}





const signIn = () => {

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    console.log("email =>", email, "password =>", password)


    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in
            window.location.href = "welcome.html"
            // ...
        })
        .catch((error) => {
            alert("Invalid Email and password")
            console.log(error.code);
            console.log(error.message);
        });
}
