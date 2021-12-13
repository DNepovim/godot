import { ListUsersResult } from "firebase-admin/auth"
import { NextApiHandler } from "next/dist/shared/lib/utils"
import { getUsersList } from "../../../firebase/admin"

const handler: NextApiHandler<ListUsersResult> = async (_, res) => {
  const users = await getUsersList()
  res.status(200).json(users)
}

export default handler
