import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword as signIn } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCaVGPiTcD8OU19LdsseQFm2lBJf0njn6I",
  authDomain: "newtech-diagnostics.firebaseapp.com",
  projectId: "newtech-diagnostics",
  storageBucket: "newtech-diagnostics.appspot.com",
  messagingSenderId: "950665748232",
  appId: "1:950665748232:web:700fdb8db8cd02f64cd6bd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, signIn, db, storage };
