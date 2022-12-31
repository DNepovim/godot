import { initializeApp } from "firebase/app"

export const firebaseConfig = {
  apiKey: process.env.GATSBY_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.GATSBY_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_PUBLIC_FIREBASE_APP_ID,
}

export const firebaseApp = initializeApp(firebaseConfig)
