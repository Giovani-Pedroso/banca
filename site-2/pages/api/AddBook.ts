// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {app, database} from "../../firebase/init.ts"
import {collection, doc, setDoc} from 'firebase/firestore';

const collectionBooksRef = collection(database, "Books");

type Data = {
  name: string
}

const aVeryStrongPassword="Havia um homem, bem homem, mutio homem, porem descobriram que ele não era um homem e sim um cavalo"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  let dataToAdd =  JSON.parse(req.body)
  
  if(dataToAdd.password != aVeryStrongPassword){
    res.status(403).json("wrong password")
    return 
  }
  delete dataToAdd.password
  
  const barcode = dataToAdd.barcode.toString()
  delete dataToAdd.barcode

  const bookRef = doc(database, 'Books', barcode );
  
  setDoc(bookRef, dataToAdd)
    .then(response=>res.status(200)
		       .json({success: "the data was added"}))
    .catch(err=>res.status(500)
		   .json({error: err.mesage}))
  
  console.log(dataToAdd)
  
  
}
