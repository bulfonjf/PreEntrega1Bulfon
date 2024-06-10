// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDocs, collection } from "firebase/firestore";
import { Item } from "../model/item";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { Order } from "../model/order";

const env = import.meta.env;

const firebaseConfig = {
    apiKey: env.VITE_FIREBASE_API_KEY,
    authDomain: env.VITE_IREBASE_AUTH_DOMAIN,
    projectId: env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getItems() {
    const querySnapshot = await getDocs(collection(db, "items"));
    const items: Item[] = [];
    querySnapshot.docs.forEach((doc) => {
        const item: Item = {
            id: doc.id,
            image: doc.data().image,
            price: doc.data().price,
            description: doc.data().description,
            category: doc.data().category,
            stock: doc.data().stock
        };
        items.push(item);
    });
    return items;
}

export async function getItemById(id: string) {
    const querySnapshot = await getDocs(collection(db, "items"));
    let item: Item = {} as Item;
    querySnapshot.docs.find((doc) => {
        if (doc.id === id) {
            item = {
                id: doc.id,
                image: doc.data().image,
                price: doc.data().price,
                description: doc.data().description,
                category: doc.data().category,
                stock: doc.data().stock
            };
            return true;
        }
        return false;
    });
    return item;
}