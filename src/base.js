import * as firebase from "firebase/app";
import "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDW17T1Vdz3IorwYGD_WRvGan9_Ac30I_Y",
    authDomain: "fir-be199.firebaseapp.com",
    projectId: "fir-be199",
    storageBucket: "fir-be199.appspot.com",
    messagingSenderId: "46861278484",
    appId: "1:46861278484:web:135315a8f5fe2897973601",
    measurementId: "G-BJXTQGKMPQ"
  };


  export const app = firebase.initializeApp(firebaseConfig);