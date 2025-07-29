// firebase-init.js
console.log("📦 Cargando firebase-init.js...");

if (typeof firebase === "undefined") {
  console.error("❌ Firebase SDK no cargado aún.");
} else {
  const firebaseConfig = {
    apiKey: "AIzaSyAA7SZYGbCZrBpurLVrW4RPbM5Zl-32Mog",
    authDomain: "trkkn-cot-firebase.firebaseapp.com",
    projectId: "trkkn-cot-firebase",
    storageBucket: "trkkn-cot-firebase.appspot.com",
    messagingSenderId: "490397786735",
    appId: "1:490397786735:web:6cc8d158f904865bdc239a"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("✅ Firebase inicializado.");
  }

  window.auth = firebase.auth();
  console.log("✅ window.auth definido:", window.auth);
}
