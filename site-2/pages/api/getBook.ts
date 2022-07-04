import type { NextApiRequest, NextApiResponse } from 'next'
import {app, database} from "../../firebase/init.js"
import {collection, getDoc, doc} from 'firebase/firestore';
import Cors from 'cors'

const collectionBooksRef = collection(database, "Books");

type Data = {
  message?: string,
  data?: any
}


const cors = Cors({
  methods: ['GET', 'HEAD'],
})

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await runMiddleware(req, res, cors)
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
