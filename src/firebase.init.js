// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD97s7Tpztpw0M1qHSBT-UQ6EDbQMkbS9E",
  authDomain: "travel-guru-c7fa5.firebaseapp.com",
  projectId: "travel-guru-c7fa5",
  storageBucket: "travel-guru-c7fa5.appspot.com",
  messagingSenderId: "243305661033",
  appId: "1:243305661033:web:36b81488acfd1ce02d58f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
