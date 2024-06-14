// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc } from "firebase/firestore";
import { doc, addDoc, getDoc, getDocs, collection, query, where} from "firebase/firestore";
import { Item } from "../model/item";
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

export async function saveOrder(order: Order) {
    return addDoc(collection(db, "orders"), order);
}

export async function updateItem(item: Item) {
    await setDoc(doc(db, "items", item.id), item, {merge: true});
}

export async function getItems(category: string) {
    if (category !== 'all') {
        return getItemsByCategory(category);
    } else {
        return getAllItems();
    }
}
    
async function getItemsByCategory(category: string) {
    const q = query(collection(db, "items"), where("category", "==", category));
    const querySnapshot = await getDocs(q);

    const items: Item[] = [];

    querySnapshot.docs.forEach((doc) => {
        if (doc.data().category === category) {
            const item: Item = {
                id: doc.id,
                title: doc.data().title,
                image: doc.data().image,
                price: doc.data().price,
                description: doc.data().description,
                category: doc.data().category,
                stock: doc.data().stock
            };
            items.push(item);
        }
    });
    
    return items;
}

async function getAllItems() {
    const items: Item[] = [];

    const querySnapshot = await getDocs(collection(db, "items"));
    querySnapshot.docs.forEach((doc) => {
        const item: Item = {
            id: doc.id,
            title: doc.data().title,
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
    const itemData = await getDoc(doc(db, "items", id));
    const item: Item = {
        id: itemData.id,
        title: itemData.data()?.title,
        image: itemData.data()?.image,
        price: itemData.data()?.price,
        description: itemData.data()?.description,
        category: itemData.data()?.category,
        stock: itemData.data()?.stock
    };
    return item;
    
}

export async function getAllCategories() {
    const querySnapshot = await getDocs(collection(db, "categories"));
    
    return querySnapshot.docs.map((doc) => {
        return doc.data().title;
    });
}