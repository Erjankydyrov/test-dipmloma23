// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCshDC5t94ck26dbLozrsphISXXKujRxVo",
  authDomain: "diplom-b2b4b.firebaseapp.com",
  projectId: "diplom-b2b4b",
  storageBucket: "diplom-b2b4b.appspot.com",
  messagingSenderId: "65197132264",
  appId: "1:65197132264:web:94ebb98415dca05ea07c5d"
};

// Инициализация приложения
const app = initializeApp(firebaseConfig);
// Инициализация базы данных
const db = getFirestore(app);

// Получение списка категорий (коллекции документов)
export const categories = collection(db, 'categories');