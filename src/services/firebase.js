import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyAMoo8U1tqNNuE1aO_258A9ZZcJ8gEMeSc',
    authDomain: 'react-chat-74315.firebaseapp.com',
    databaseURL: 'https://react-chat-74315-default-rtdb.firebaseio.com',
    projectId: 'react-chat-74315',
    storageBucket: 'react-chat-74315.appspot.com',
    messagingSenderId: '514576895701',
    appId: '1:514576895701:web:1b6d7654e9872be2489c5c'
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
