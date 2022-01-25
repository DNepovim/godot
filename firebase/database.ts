import { get, child, set, ref, getDatabase } from "firebase/database"
import { Navigation, Page, SiteMeta } from "../data"
import { firebaseApp } from "./firebase"

const dbRef = ref(getDatabase(firebaseApp))

export const getNavigation = async (): Promise<Navigation | undefined> =>
  getData(`config/navigation/`)

export const getMeta = async (): Promise<SiteMeta | undefined> =>
  getData(`config/meta/`)

export const getPage = async (page: string): Promise<Page | undefined> =>
  getData(`pages/${page}/`)

export const getPages = async (): Promise<Page | undefined> => getData(`pages/`)

export const getData = async (path: string): Promise<any> => {
  try {
    const snapshot = await get(child(dbRef, path))

    if (snapshot.exists()) {
      const res = snapshot.val()
      return res
    } else {
      return undefined
    }
  } catch (e) {
    console.error(e)
  }
}

export const updatePage = async (page: string, values: Page) =>
  writeData(`pages/${page}`, values)

export const writeData = async (path: string, values: any): Promise<void> => {
  try {
    await set(child(dbRef, path), values)
  } catch (e) {
    console.error(e)
    if ((e as { code: string }).code === "PERMISSION_DENIED") {
      // TODO fix types
      return
    }
    return
  }
}
