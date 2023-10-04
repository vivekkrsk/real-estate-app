// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'real-estate-app-1b913.firebaseapp.com',
  projectId: 'real-estate-app-1b913',
  storageBucket: 'real-estate-app-1b913.appspot.com',
  messagingSenderId: '892512775046',
  appId: '1:892512775046:web:65cea8c1768dcc092c5a07',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
