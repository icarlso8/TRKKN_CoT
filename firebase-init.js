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

// Inicializa Firebase si aún no está inicializado (evita errores en recarga)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Deja auth global (porque firebase-auth.js ya está cargado antes)
window.auth = firebase.auth();

// ✅ Verificación final en consola
console.log("🚀 firebase-init.js cargado correctamente");
