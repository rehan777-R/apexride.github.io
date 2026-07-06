// src/constants/firebase-config.js
//
// ApexRide - Firebase project configuration.
// NOTE: This config is safe to keep public (it is not a secret API key like
// the Groq key). Firebase security comes from Auth rules / Firestore rules,
// not from hiding this object. Still, replace the placeholders below with
// YOUR new ApexRide Firebase project's values (Project Settings > General >
// Your apps > SDK setup and configuration).

const firebaseConfig = {
  apiKey: "REPLACE_WITH_YOUR_API_KEY",
  authDomain: "REPLACE_WITH_YOUR_PROJECT.firebaseapp.com",
  projectId: "REPLACE_WITH_YOUR_PROJECT_ID",
  storageBucket: "REPLACE_WITH_YOUR_PROJECT.appspot.com",
  messagingSenderId: "REPLACE_WITH_YOUR_SENDER_ID",
  appId: "REPLACE_WITH_YOUR_APP_ID"
};

// Firebase initialize karna (compat SDK - script tags se load hota hai, no bundler needed)
firebase.initializeApp(firebaseConfig);

// Auth aur Google provider globally available rakhna taake auth-nav.js,
// signup.js aur signin.js inhe use kar sakein.
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
