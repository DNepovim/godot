import { NextApiHandler } from "next/dist/shared/lib/utils"
import { getPage } from "../../../firebase/database"

const handler: NextApiHandler = async (req, res) => {
  const body = JSON.parse(req.body)
  const page = await getPage(body.slug as string)
  res.status(200).send(page)
}

export default handler
