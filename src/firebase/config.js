import firebase from "firebase"
import 'firebase/firestore'
import 'firebase/auth'

// firebase config here

// init firebase 
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }