// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDpFZyilW7rpKVxCroq5Ob6gFpln25oqtA',
  authDomain: 'travel-guru-4bb00.firebaseapp.com',
  projectId: 'travel-guru-4bb00',
  storageBucket: 'travel-guru-4bb00.appspot.com',
  messagingSenderId: '436930319959',
  appId: '1:436930319959:web:18dd4974ba86dcaa0af512',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
