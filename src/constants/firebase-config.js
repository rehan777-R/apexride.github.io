// src/constants/firebase-config.js
//
// ApexRide - Firebase project configuration.
// NOTE: This config is safe to keep public (it is not a secret API key like
// the Groq key). Firebase security comes from Auth rules / Firestore rules,
// not from hiding this object. Still, replace the placeholders below with
// YOUR new ApexRide Firebase project's values (Project Settings > General >
// Your apps > SDK setup and configuration).

const firebaseConfig = {
  apiKey: "AIzaSyCo1eh6GHyetA-Oaf55yXyWL6mIT5RYHO4",
  authDomain: "apexride-auth2.firebaseapp.com",
  projectId: "apexride-auth2",
  storageBucket: "apexride-auth2.firebasestorage.app",
  messagingSenderId: "570556728107",
  appId: "1:570556728107:web:d8b6ae2ca5246fe158fb6e"
};

// Firebase initialize karna (compat SDK - script tags se load hota hai, no bundler needed)
firebase.initializeApp(firebaseConfig);

// Auth aur Google provider globally available rakhna taake auth-nav.js,
// signup.js aur signin.js inhe use kar sakein.
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
