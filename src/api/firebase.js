import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyC63yXX6gTkqpBzlO-2py1NHyKqwrEIC58",
    authDomain: "ionicfire-7179b.firebaseapp.com",
    databaseURL: "https://ionicfire-7179b.firebaseio.com",
    projectId: "ionicfire-7179b",
    storageBucket: "ionicfire-7179b.appspot.com",
    messagingSenderId: "922472922500",
    appId: "1:922472922500:web:4365e1915746e82c5171d1"
  };
var fire = firebase.initializeApp(config);
export default fire;