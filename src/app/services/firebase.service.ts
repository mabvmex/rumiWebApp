import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

   // Initialize Firebase
    var config = {
      apiKey: "AIzaSyC-Eox17-BKwRZPPuOaBfe1YdJ7cEJPAG4",
      authDomain: "rumiapp-de032.firebaseapp.com",
      databaseURL: "https://rumiapp-de032.firebaseio.com",
      projectId: "rumiapp-de032",
      storageBucket: "rumiapp-de032.appspot.com",
      messagingSenderId: "445959192565"
    };
    firebase.initializeApp(config);


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  url = 'http://localhost:3000/'

  constructor() { }
  provider = new firebase.auth.FacebookAuthProvider()
 googleProvider = new firebase.auth.GoogleAuthProvider()
 loginWihFacebotok(){
  firebase.auth().signInWithPopup(this.provider)
  .then(snap=>{
   //console.log(snap.credential.accessToken)
   // localStorage.setItem('user', JSON.stringify(snap.user))
   this._sendTokenToBackend(snap)
  })
 }
 _sendTokenToBackend(snap){
  const token = snap.credential.accessToken
  fetch(this.url + 'facebook/login', {
   method:'post',
   headers:{
    'Authorization': `Bearer ${token}`
   }
  }) 
  .then(r=>{
   if(!r.ok) throw new Error()
   return r.json()
  })
  .then(res=>{
   console.log(res)
   localStorage.setItem('facebookToken', JSON.stringify(snap.credential.accessToken))
   localStorage.setItem('user', JSON.stringify(res))
  }) 
 }
}