import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyAQNEGEL-C9zodI7eyhlYqiAmAEAnv2Aw0",
    authDomain: "motionprol.firebaseapp.com",
    projectId: "motionprol",
    storageBucket: "motionprol.appspot.com",
    messagingSenderId: "290691177062",
    appId: "1:290691177062:web:a8e1905c2a9a3f68766ba7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)