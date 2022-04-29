import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVXSxwok6NVXyANdllK3_l6yBX43FYtqA",
  authDomain: "proyectofinal-react.firebaseapp.com",
  projectId: "proyectofinal-react",
  storageBucket: "proyectofinal-react.appspot.com",
  messagingSenderId: "212877720030",
  appId: "1:212877720030:web:491f99eb0cea2e0331454f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
