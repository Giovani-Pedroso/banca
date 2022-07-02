declare global {
  namespace NodeJS {
    interface ProcessEnv {
  // this is the line you want
      NEXT_PUBLIC_FIREBASE_API_KEY:string
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:string;
      NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string;
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
      NEXT_PUBLIC_FIREBASE_API_ID: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
    }
  }
}
