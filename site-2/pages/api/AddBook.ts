// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {app, database} from "../../firebase/init.js"
import {collection, doc, setDoc} from 'firebase/firestore';
import Cors from 'cors'

const collectionBooksRef = collection(database, "Books");

type Data = {
  message: string
}

const cors = Cors({
  methods: ['GET', 'HEAD'],
})

function runMiddleware(req: NextApiRequest, res:NextApiResponse, fn:any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

const aVeryStrongPassword="Havia um homem, bem homem, mutio homem, porem descobriram que ele não era um homem e sim um cavalo"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  await runMiddleware(req, res, cors)
  let dataToAdd =  JSON.parse(req.body)
  
  if(dataToAdd.password != aVeryStrongPassword){
    res.status(403).json({message:"wrong password"})
    return 
  }
  delete dataToAdd.password
  
  const barcode = dataToAdd.barcode.toString()
  delete dataToAdd.barcode

  const bookRef = doc(database, 'Books', barcode );
  
  setDoc(bookRef, dataToAdd)
    .then(response=>res.status(200)
		       .json({message: "the data was added"}))
    .catch(err=>res.status(500)
		   .json({message: `Error: ${err.mesage}`}))
  
  console.log(dataToAdd)
  
  
}
