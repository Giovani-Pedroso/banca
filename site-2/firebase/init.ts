import dotenv from 'dotenv'
import { initializeApp } from "firebase/app";
import { getFirestore} from'firebase/firestore';
//import 'environment.d.ts';
dotenv.config()

const clientCredentials = {
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_API_ID
};

export const app = initializeApp(clientCredentials);
export const database = getFirestore(app);
