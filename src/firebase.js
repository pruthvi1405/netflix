import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCF3tOJudLlhzdKll0IjfmYwQg8PW3CebY",
    authDomain: "netflix-clone-559b3.firebaseapp.com",
    projectId: "netflix-clone-559b3",
    storageBucket: "netflix-clone-559b3.appspot.com",
    messagingSenderId: "603996792737",
    appId: "1:603996792737:web:886240af4538c14e3c0de0"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {auth};
  export default db;