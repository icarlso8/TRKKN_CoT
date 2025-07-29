// firebase-init.js
const firebaseConfig = {
  apiKey: "AIzaSyAA7SZYGbCZrBpurLVrW4RPbM5Zl-32Mog",
  authDomain: "trkkn-cot-firebase.firebaseapp.com",
  projectId: "trkkn-cot-firebase",
  storageBucket: "trkkn-cot-firebase.appspot.com",
  messagingSenderId: "490397786735",
  appId: "1:490397786735:web:6cc8d158f904865bdc239a"
};

// ✅ Solo inicializa si aún no está inicializado
if (!firebase.apps || !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log("🚀 Firebase inicializado correctamente");
}

// ✅ Exporta auth globalmente
window.auth = firebase.auth();
