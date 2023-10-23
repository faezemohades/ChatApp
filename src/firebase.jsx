import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

 const firebaseConfig = {
  apiKey: "AIzaSyC2w08MBEzSusRX3TjXSTK57TUsGFqoxq0",
  authDomain: "instantchat-93096.firebaseapp.com",
  projectId: "instantchat-93096",
  storageBucket: "instantchat-93096.appspot.com",
  messagingSenderId: "927206208123",
  appId: "1:927206208123:web:002d5e7e4775837a0828de"
};

 const app = initializeApp(firebaseConfig);

 export const auth=getAuth(app);
 export const db = getFirestore(app);
