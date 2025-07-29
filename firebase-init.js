// firebase-init.js
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAA7SZYGbCZrBpurLVrW4RPbM5Zl-32Mog",
  authDomain: "trkkn-cot-firebase.firebaseapp.com",
  projectId: "trkkn-cot-firebase",
  storageBucket: "trkkn-cot-firebase.appspot.com",
  messagingSenderId: "490397786735",
  appId: "1:490397786735:web:6cc8d158f904865bdc239a"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
window.auth = auth; // ✅ lo hacemos global para que sea accesible desde otros scripts
