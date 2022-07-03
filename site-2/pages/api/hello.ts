// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore} from'firebase/firestore';
import dotenv from 'dotenv';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: `test
 process.env.TEST=${process.env.TEST}

    ${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN},\n
    ${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID},\n
    ${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET},\n
    ${process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID},\n
    ${process.env.NEXT_PUBLIC_FIREBASE_API_ID}
  ` })
}
