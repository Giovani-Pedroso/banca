// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {app, database} from "../../firebase/init.ts"
import {collection, getDoc, doc} from 'firebase/firestore';

const collectionBooksRef = collection(database, "Books");

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {barcode} = req.query
  const bookRef = doc(database, "Books", barcode)
  const book = await getDoc(bookRef)

  if(book.exists()){
    res.status(200).json(book.data())
  }
  else{
    res.status(200).json("")
  }

  //console.log(typeof(barcode))

  res.status(200).json("test")


}
