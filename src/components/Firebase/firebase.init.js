import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;


// const firebaseConfig = {
//     apiKey: "AIzaSyDdNbliwvwLSJ3F71CG8qiAG6O6DDerRCc",
//     authDomain: "skywalker-c95af.firebaseapp.com",
//     projectId: "skywalker-c95af",
//     storageBucket: "skywalker-c95af.appspot.com",
//     messagingSenderId: "575942500870",
//     appId: "1:575942500870:web:c388a56b32a4289d63d987",
//   };