import * as firebase from 'firebase'
import { toast } from './toast'

const config = {
    apiKey: "AIzaSyC63yXX6gTkqpBzlO-2py1NHyKqwrEIC58",
    authDomain: "ionicfire-7179b.firebaseapp.com",
    databaseURL: "https://ionicfire-7179b.firebaseio.com",
    projectId: "ionicfire-7179b",
    storageBucket: "ionicfire-7179b.appspot.com",
    messagingSenderId: "922472922500",
    appId: "1:922472922500:web:4365e1915746e82c5171d1"
  }

firebase.initializeApp(config)

export async function loginUser(username: string, password: string) {
    const email = `${username}@yojuego.do`
    

    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)

        console.log(res)
        return true
    } catch (error) {
        toast(error.message, 4000)
        return false
    }
}
    
    export async function registerUser(username: string, password: string) {
        const email = `${username}@yojuego.do`
        try {
            const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
            console.log(res)
            return true
        } catch (error) {
            toast(error.message, 4000)
            return false
        }
    }