import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import API_KEY from "./api-key"

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "finance-d-csv.firebaseapp.com",
  projectId: "finance-d-csv",
  storageBucket: "finance-d-csv.appspot.com",
  messagingSenderId: "710454682388",
  appId: "1:710454682388:web:68210b4d58ded0617b1801"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }
