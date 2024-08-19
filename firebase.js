// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_meE57oyNecKclnT320ruwbVj4qLey9k",
  authDomain: "flashcard-saas-8b316.firebaseapp.com",
  projectId: "flashcard-saas-8b316",
  storageBucket: "flashcard-saas-8b316.appspot.com",
  messagingSenderId: "749288895139",
  appId: "1:749288895139:web:a2dc86af89821ca1e80516",
  measurementId: "G-NYC65SSM75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app); // Now db is defined and initialized

// Export the initialized Firestore instance
export { db };
