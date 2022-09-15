//connection to firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { 
    getFirestore, 
    doc, 
    addDoc, 
    deleteDoc, 
    updateDoc, 
    getDocs, 
    collection,
    onSnapshot } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgVShGESMLL5Tj_iuGJIMcciGZteebgeA",
    authDomain: "fir-crud-fa4fb.firebaseapp.com",
    projectId: "fir-crud-fa4fb",
    storageBucket: "fir-crud-fa4fb.appspot.com",
    messagingSenderId: "582279871780",
    appId: "1:582279871780:web:bf86c25d0cf98e0140c7b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const docRef = collection(db,"tasks");

//Fetch document values

//AddDoc tells firestore where to store the data, and as a parameter you put the collection, and what "bucket"

export const getTasks = () => getDocs(collection(db,'tasks'));

export const onGetTasks = (callback) => onSnapshot(collection(db,'tasks'),callback);

export const deleteTask = id => deleteDoc(doc(db,'tasks',id));

export const saveTask = (addTitle,addDescription) => {
    addDoc(docRef,{
        title: addTitle,
        description: addDescription
    })
}

