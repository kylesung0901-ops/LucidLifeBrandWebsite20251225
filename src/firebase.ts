// Firebase 설정 파일
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase 설정 값 (환경 변수 또는 기본값 사용)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBROSVZBrWW0lcONg4hf_HAbASD_5ghwc4",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "lucid-life-brand-website-27cd4.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "lucid-life-brand-website-27cd4",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "lucid-life-brand-website-27cd4.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1060319849010",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1060319849010:web:d1a1ca38dbd5910a8eaa2b",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-7VV5R72Y3E"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Analytics 초기화 (브라우저 환경에서만)
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };

