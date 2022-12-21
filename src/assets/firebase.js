
import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "ecommercereact2022.firebaseapp.com",
  projectId: "ecommercereact2022",
  storageBucket: "ecommercereact2022.appspot.com",
  messagingSenderId: "100575450873",
  appId: "1:100575450873:web:9bebd566503168b6bcb428"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const cargarBDD = async ()=>{
    const promise = await fetch('./json/productos.json');
    const productos = await promise.json();
    productos.forEach(async (prod) =>{
        await addDoc(collection(db,"productos"),{
            idCategoria:prod.idCategoria,
            producto:prod.producto,
            marca:prod.marca,
            nombreAMostrar:prod.nombreAMostrar,
            modelo:prod.modelo,
            precio:prod.precio,
            stock:prod.stock,
            img:prod.img
        })
    })
}

export {cargarBDD}