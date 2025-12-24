// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Analytics (only in browser environment)
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };

