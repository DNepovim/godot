import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth"

const provider = new GoogleAuthProvider()
export const auth = getAuth()

export const login = async () => {
  try {
    await signInWithPopup(auth, provider)
  } catch (e) {
    console.error(e)
  }
}

export const logout = () => {
  signOut(auth)
}