// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
//
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDLTDQeAwnWOd1EvtN0KtEt2zPC6qV7iK0",
//     authDomain: "server-2909.firebaseapp.com",
//     projectId: "server-2909",
//     storageBucket: "server-2909.appspot.com",
//     messagingSenderId: "815465987790",
//     appId: "1:815465987790:web:3cf2265755730115061a9f",
//     measurementId: "G-CMJQ4T7W3Q"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import admin from 'firebase-admin';
import serviceAccount from "../../server-2909-firebase-adminsdk-yzga2-eb71ad39ca.json";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'server-2909.appspot.com'
});

export default admin;