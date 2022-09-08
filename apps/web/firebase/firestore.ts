import { initializeApp } from "firebase/app"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { NavigationItem, Page, SiteMeta } from "../data"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

export const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

export const getNavigation = async (): Promise<
  NavigationItem[] | undefined
> => []

export const getMeta = async (): Promise<SiteMeta | undefined> => ({})

export const getPage = async (page: string): Promise<Page | undefined> => {
  const docRef = doc(db, "page", page)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) {
    return
  }
  return docSnap.data() as Page
}
