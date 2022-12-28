import { doc, getDoc, getFirestore } from "firebase/firestore"
import { Navigation, Page, SiteMeta } from "../data"
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

export const getPage = async (page: string): Promise<Page | undefined> => {
  const result = (await getData("page", page)) as unknown as Page
  console.log(result)
  return result
}
