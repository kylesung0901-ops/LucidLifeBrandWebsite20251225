// Firebase 설정 파일
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase 설정 값
const firebaseConfig = {
  apiKey: "AIzaSyBROSVZBrWW0lcONg4hf_HAbASD_5ghwc4",
  authDomain: "lucid-life-brand-website-27cd4.firebaseapp.com",
  projectId: "lucid-life-brand-website-27cd4",
  storageBucket: "lucid-life-brand-website-27cd4.firebasestorage.app",
  messagingSenderId: "1060319849010",
  appId: "1:1060319849010:web:d1a1ca38dbd5910a8eaa2b",
  measurementId: "G-7VV5R72Y3E"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Analytics 초기화 (브라우저 환경에서만)
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };

