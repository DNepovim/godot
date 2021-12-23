import admin from "firebase-admin"
import { getAuth } from "firebase-admin/auth"

if (!admin.apps.length) {
  const serviceAccount = JSON.parse(
    process.env.GOOGLE_APPLICATION_CREDENTIALS as string
  )
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  })
}

export const getUsersList = async () => getAuth().listUsers()

export enum UserRoles {
  Admin = "admin",
  Editor = "editor",
  Guest = "guest",
}

export const setUserRole = async (uid: string, role: string) => {
  getAuth().setCustomUserClaims(uid, { role })
}

export const getUserRole = async (uid: string) =>
  (await getAuth().getUser(uid)).customClaims?.role

export const deleteUser = async (uid: string) => {
  try {
    return await getAuth().deleteUser(uid)
  } catch (e) {
    throw e
  }
}
