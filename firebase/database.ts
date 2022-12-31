import { doc, getDoc, getFirestore } from "firebase/firestore"
import { Navigation, Page, SiteMeta } from "../src/data"
import { firebaseApp } from "./firebase"

export const db = getFirestore(firebaseApp)

export const getData = async (collection: string, page: string) => {
  const docRef = await doc(db, collection, page)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) {
    return
  }
  return docSnap.data()
}

export const getNavigation = async (): Promise<Navigation | undefined> =>
  getData("config", "navigation") as unknown as Navigation

export const getMeta = async (): Promise<SiteMeta | undefined> =>
  getData("config", "meta")

export const getPage = async (page: string): Promise<Page | undefined> =>
  getData("page", page) as unknown as Page
