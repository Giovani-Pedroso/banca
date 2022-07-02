
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
  const barcode:string = req.query.barcode as string
  const bookRef = doc(database, 'Books', barcode );

  const book = await getDoc(bookRef)
  if(book.exists()){
    res.status(200).json({data:book.data()})
  }
  else{
    res.status(200).json({message:""})
  }
  //console.log(typeof(barcode))

  res.status(200).json({message:"test"})


}
