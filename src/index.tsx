import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { rootReducer } from "./ducks/reducers";
import { BrowserRouter } from "react-router-dom";

const firebaseConfig = {
    apiKey: "AIzaSyC63yXX6gTkqpBzlO-2py1NHyKqwrEIC58",
    authDomain: "ionicfire-7179b.firebaseapp.com",
    databaseURL: "https://ionicfire-7179b.firebaseio.com",
    projectId: "ionicfire-7179b",
    storageBucket: "ionicfire-7179b.appspot.com",
    messagingSenderId: "922472922500",
    appId: "1:922472922500:web:4365e1915746e82c5171d1"
  };
  
  const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true,
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  
  const initialState = {};
  const store = createStore(rootReducer, initialState);
  
  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance, //since we are using Firestore
  };
  
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ReactReduxFirebaseProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
