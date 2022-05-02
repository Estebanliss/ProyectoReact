import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdmsoy9IXCnx5Mx8GigpDV_-EkmLOI0J4",
  authDomain: "pryectoejemplo-13d15.firebaseapp.com",
  projectId: "pryectoejemplo-13d15",
  storageBucket: "pryectoejemplo-13d15.appspot.com",
  messagingSenderId: "452238461522",
  appId: "1:452238461522:web:9f89d85a4f13ccc4efad8b",
  // apiKey: "AIzaSyDVXSxwok6NVXyANdllK3_l6yBX43FYtqA",
  // authDomain: "proyectofinal-react.firebaseapp.com",
  // projectId: "proyectofinal-react",
  // storageBucket: "proyectofinal-react.appspot.com",
  // messagingSenderId: "212877720030",
  // appId: "1:212877720030:web:491f99eb0cea2e0331454f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
