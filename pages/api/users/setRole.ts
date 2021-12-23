import { NextApiHandler } from "next/dist/shared/lib/utils"
import { setUserRole } from "../../../firebase/admin"

const handler: NextApiHandler = async (req, res) => {
  const body = JSON.parse(req.body)
  await setUserRole(body.uid, body.role)
  res.status(200).send({ result: "ok" })
}

export default handler
