import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBImwaq991qIAKQOwOdS1__NiR2-5jLgdA",
    authDomain: "movies-project-2-2f640.firebaseapp.com",
    projectId: "movies-project-2-2f640",
    storageBucket: "movies-project-2-2f640.appspot.com",
    messagingSenderId: "641836234153",
    appId: "1:641836234153:web:1d27c3ee3b3d46243cc0b8"
  };

  firebase.initializeApp(firebaseConfig)

  const ProjectFirestore = firebase.firestore()

  export default ProjectFirestore