import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyC0prGBb5fFTPLe8WBqKuv8GLvRBP5HsVM',
  authDomain: 'marioplanreduxproject.firebaseapp.com',
  databaseURL: 'https://marioplanreduxproject.firebaseio.com',
  projectId: 'marioplanreduxproject',
  storageBucket: 'marioplanreduxproject.appspot.com',
  messagingSenderId: '1090203349209',
  appId: '1:1090203349209:web:2190b243bcc11000b04ec8',
  measurementId: 'G-8QRE7J2N50',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore();

export default firebase;
// .settings({ timestampsInSnapshots: true });
