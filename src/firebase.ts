import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBROSVZBrWW0lcONg4hf_HAbASD_5ghwc4",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "lucid-life-brand-website-27cd4.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "lucid-life-brand-website-27cd4",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "lucid-life-brand-website-27cd4.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1060319849010",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1060319849010:web:d1a1ca38dbd5910a8eaa2b",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-7VV5R72Y3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);

// Initialize Analytics (only in browser environment)
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, db, auth, analytics };

