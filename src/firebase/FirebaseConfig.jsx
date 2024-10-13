import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAEy4SvpmZLUwtt4ML7jvLEtFS3I9CWQQQ",
  authDomain: "hs-blogging-app.firebaseapp.com",
  projectId: "hs-blogging-app",
  storageBucket: "hs-blogging-app.appspot.com",
  messagingSenderId: "274502558658",
  appId: "1:274502558658:web:a584a96e35bfe55ea02c5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb , auth , storage }