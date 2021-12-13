import admin from "firebase-admin"
import { applicationDefault } from "firebase-admin/app"
import { getAuth } from "firebase-admin/auth"


if (!admin.apps.length) {
  admin.initializeApp({
    credential: applicationDefault(),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
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

export const getUserRole = async (uid: string) => (await getAuth().getUser(uid)).customClaims?.role
