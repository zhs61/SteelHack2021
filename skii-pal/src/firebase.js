import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCS4_e9d9u0Cn75l9NgFoMmXXLSFTurbQ0",
  authDomain: "skii-pal.firebaseapp.com",
  projectId: "skii-pal",
  storageBucket: "skii-pal.appspot.com",
  messagingSenderId: "373520097652",
  appId: "1:373520097652:web:c67917bee57640bfc84c21",
});

export const auth = app.auth();
export default app;
