import { NextApiHandler } from "next/dist/shared/lib/utils"
import { getUserRole } from "../../../firebase/admin"

const handler: NextApiHandler<{ role: string }> = async (req, res) => {
  const body = JSON.parse(req.body)
  const role = await getUserRole(body.uid)
  res.status(200).send({ role })
}

export default handler
