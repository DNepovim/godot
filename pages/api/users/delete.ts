import { NextApiHandler } from "next/dist/shared/lib/utils"
import { deleteUser } from "../../../firebase/admin"

const handler: NextApiHandler = async (req, res) => {
  try {
    const body = JSON.parse(req.body)
    await deleteUser(body.uid)
    res.status(200).send({ result: "ok" })
  } catch (e) {
    res.status(500).send(e)
  }
}

export default handler
