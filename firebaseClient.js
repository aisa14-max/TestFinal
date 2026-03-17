// UCL, Bartlett, RC5
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    signInAnonymously,
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import {
    getFirestore,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    orderBy,
    setDoc,
    deleteDoc,
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";


///IMPORTANT
const firebaseConfig = {
    apiKey: "AIzaSyCUq7aiGZQjb11srxDJ78RDsvPEckYINz4",
    authDomain: "configurator-12b4c.firebaseapp.com",
    projectId: "configurator-12b4c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();

export const AuthApi = {
    onAuthStateChanged,
    signInWithGoogle: () => signInWithPopup(auth, googleProvider),
    signInAnonymously: () => signInAnonymously(auth),
    signOut: () => signOut(auth),
};

export const FsApi = {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    orderBy,
    setDoc,
    deleteDoc,
};
