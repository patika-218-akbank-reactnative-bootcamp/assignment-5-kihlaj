import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA8Wa0SFwKVmq_bvKPGIvpXkDy4tI1ZT4Y",
  authDomain: "spoifty-clone.firebaseapp.com",
  projectId: "spoifty-clone",
  storageBucket: "spoifty-clone.appspot.com",
  messagingSenderId: "910070125771",
  appId: "1:910070125771:web:97b0c996d721f1a221f74e"
};

const app = initializeApp(firebaseConfig)
export const authentication = getAuth(app)
