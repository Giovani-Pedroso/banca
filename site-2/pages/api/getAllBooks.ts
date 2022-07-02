import type { NextApiRequest, NextApiResponse } from 'next'
import {app, database} from "../../firebase/init.js"
import {collection, addDoc, getDocs, setDoc, doc} from 'firebase/firestore';

const collectionBooksRef = collection(database, "Books");

type Data = {
  message?: string,
  data?:any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    getDocs(collectionBooksRef)
      .then(response=>{
	const data = response.docs.map(item=>{
	  return{...item.data(), id: item.id}
	})
	
	res.status(200).json({data})
      })
      .catch(err=>res.status(500).json({message:`Error: ${err}`}))

}
