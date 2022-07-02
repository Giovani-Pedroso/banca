import dotenv from 'dotenv';
import { initializeApp } from "firebase/app";
import { getFirestore} from'firebase/firestore';
//import 'environment.d.ts';
dotenv.config();

const clientCredentials = {
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_API_ID
};

export const app = initializeApp(clientCredentials);
export const database = getFirestore(app);


/*
import type { NextApiRequest, NextApiResponse } from 'next'
import {app, database} from "../../firebase/init.js"
import {collection, getDoc, doc} from 'firebase/firestore';

const collectionBooksRef = collection(database, "Books");

type Data = {
  message?: string,
  data?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {barcode} = req.query
 // const bookRef = doc(database, "Books", barcode)
  const bookRef = doc(database, 'Books', barcode );


  //const book = await getDoc(bookRef)
  if(book.exists()){
    res.status(200).json({data:book.data()})
  }
  else{
    res.status(200).json({message:""})
  }
  //console.log(typeof(barcode))

  res.status(200).json({message:"test"})


}
*/
