// firebase-config.js
// Configuración y exportación de Firebase Auth
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// 👉 Este archivo contiene la configuración del proyecto Firebase
// ⚠️ NO contiene datos sensibles. apiKey puede estar expuesta.
const firebaseConfig = {
  apiKey: "AIzaSyAA7SZYGbCZrBpurLVrW4RPbM5Zl-32Mog",
  authDomain: "trkkn-cot-firebase.firebaseapp.com",
  projectId: "trkkn-cot-firebase",
  storageBucket: "trkkn-cot-firebase.firebasestorage.app",
  messagingSenderId: "490397786735",
  appId: "1:490397786735:web:6cc8d158f904865bdc239a"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta el objeto de autenticación
const auth = getAuth(app);
export { auth };
