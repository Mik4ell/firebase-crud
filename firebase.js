// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  // Put you credentials here
  apiKey: "AIzaSyC4H4qyZUx1s25VgY18qaOaviuCRFi2U2g",
    authDomain: "fire-crud-mike.firebaseapp.com",
    projectId: "fire-crud-mike",
    storageBucket: "fire-crud-mike.appspot.com",
    messagingSenderId: "18651017738",
    appId: "1:18651017738:web:d576a3a8c3f0b2172e65f3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} nome the title of the Task
 * @param {string} sobrenome the description of the Task
 * @param {string} email 
 * @param {number} cpf 
 *  @param {string} telefone 
 
 */
export const saveTask = (nome, sobrenome, email, cpf, telefone) =>
  addDoc(collection(db, "tasks"), { nome, sobrenome, email, cpf, telefone });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));