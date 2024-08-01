import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBU1zwHIgSgwcuisJlrOigFdK4lr8PD1Qs",
  authDomain: "examen24-c821f.firebaseapp.com",
  projectId: "examen24-c821f",
  storageBucket: "examen24-c821f.appspot.com",
  messagingSenderId: "720385794591",
  appId: "1:720385794591:web:b40190db08054b38736b2a"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };