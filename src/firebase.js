import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCvwgtHtd74oKMq4lgZbKkWtGPxsoiARcQ",
    authDomain: "coach-66de1.firebaseapp.com",
    projectId: "coach-66de1",
    storageBucket: "coach-66de1.appspot.com",
    messagingSenderId: "742944638364",
    appId: "1:742944638364:web:a6e814b99ce1ef050b3459"
  };
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;