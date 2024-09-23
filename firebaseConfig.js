import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcxyZo9Q0fY9vaf9-eEj217GW-cVJLaEA",
  authDomain: "usermanagement-76460.firebaseapp.com",
  projectId: "usermanagement-76460",
  storageBucket: "usermanagement-76460.appspot.com",
  messagingSenderId: "454115108587",
  appId: "1:454115108587:web:061f643aac346b9cf640ae"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }