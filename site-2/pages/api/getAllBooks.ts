import type { NextApiRequest, NextApiResponse } from 'next'
import {app, database} from "../../firebase/init.js"
import {collection, addDoc, getDocs, setDoc, doc} from 'firebase/firestore';
import Cors from 'cors'

const collectionBooksRef = collection(database, "Books");

type Data = {
  message?: string,
  data?:any
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

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  await runMiddleware(req, res, cors)
  getDocs(collectionBooksRef)
    .then(response=>{
      const data = response.docs.map(item=>{
	return{...item.data(), id: item.id}
      })
      
      res.status(200).json({data})
      })
    .catch(err=>res.status(500).json({message:`Error: ${err}`}))
  
}


export default handler
