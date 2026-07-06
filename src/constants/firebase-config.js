// src/constants/firebase-config.js
//
// ApexRide - Firebase project configuration.
// NOTE: This config is safe to keep public (it is not a secret API key like
// the Groq key). Firebase security comes from Auth rules / Firestore rules,
// not from hiding this object. Still, replace the placeholders below with
// YOUR new ApexRide Firebase project's values (Project Settings > General >
// Your apps > SDK setup and configuration).

const firebaseConfig = {
  apiKey: "AIzaSyA-Z4oUyQCsoJiGADsLNVFvLi1_8qlEkRM",
  authDomain: "apexride-auth.firebaseapp.com",
  projectId: "apexride-auth",
  storageBucket: "apexride-auth.firebasestorage.app",
  messagingSenderId: "369036199754",
  appId: "1:369036199754:web:a80bb77b5dfcf636d1e3b3"
};

// Firebase initialize karna (compat SDK - script tags se load hota hai, no bundler needed)
firebase.initializeApp(firebaseConfig);

// Auth aur Google provider globally available rakhna taake auth-nav.js,
// signup.js aur signin.js inhe use kar sakein.
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
