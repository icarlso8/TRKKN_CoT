// firebase-init.js
// ✅ Usa el namespace global `firebase` porque no puedes usar import/export en GitHub Pages

const firebaseConfig = {
  apiKey: "AIzaSyAA7SZYGbCZrBpurLVrW4RPbM5Zl-32Mog",
  authDomain: "trkkn-cot-firebase.firebaseapp.com",
  projectId: "trkkn-cot-firebase",
  storageBucket: "trkkn-cot-firebase.appspot.com",
  messagingSenderId: "490397786735",
  appId: "1:490397786735:web:6cc8d158f904865bdc239a"
};

// Inicializa la app si aún no está inicializada (para evitar errores en recargas)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Deja auth global (firebase.auth ya está disponible porque cargaste firebase-auth.js)
window.auth = firebase.auth();
