const firebaseConfig = {
  apiKey: "AIzaSyDI7QMe0VaA8fZkq12abBhyxkFCGSTCxaE",
  authDomain: "blogandre-id.firebaseapp.com",
  databaseURL: "https://blogandre-id-default-rtdb.firebaseio.com",
  projectId: "blogandre-id",
  storageBucket: "blogandre-id.appspot.com",
  messagingSenderId: "807458840141",
  appId: "1:807458840141:web:5d8f62ab1ac2ad781ac604",
  measurementId: "G-YSM5L1QHSN"
};
const app = firebase.initializeApp(firebaseConfig);
const rdb = firebase.database();
const auth = firebase.auth();
const stg = firebase.storage();