import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCnlm6P_rwCDl_HHEHn7Q4b1mtEQ8FHPsA",
    authDomain: "react-a9944.firebaseapp.com",
    projectId: "react-a9944",
    storageBucket: "react-a9944.appspot.com",
    messagingSenderId: "1094822745579",
    appId: "1:1094822745579:web:c7f385c64c2896deb3b5ae",
    measurementId: "G-JM3LGL9772"
  };
 

class Firebase {
constructor(){
    app.initializeApp(firebaseConfig);
  //  app.analytics();

    this.app = app.database();

}

login(email, password){
    return app.auth().signInWithEmailAndPassword(email, password)
}

async register(nome, email, password){
    await app.auth().createUserWithEmailAndPassword(email, password)

    const uid = app.auth().currentUser.uid;

    return app.database().ref('usuarios').child(uid).set({
        nome: nome
    })
}

isInitialized(){
    return new Promise(resolve =>{
        app.auth().onAuthStateChanged(resolve);
    })
}

}

export default new Firebase();