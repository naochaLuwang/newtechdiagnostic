import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaVGPiTcD8OU19LdsseQFm2lBJf0njn6I",
  authDomain: "newtech-diagnostics.firebaseapp.com",
  projectId: "newtech-diagnostics",
  storageBucket: "newtech-diagnostics.appspot.com",
  messagingSenderId: "950665748232",
  appId: "1:950665748232:web:700fdb8db8cd02f64cd6bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth, serverTimestamp };
