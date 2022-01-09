import { NextApiHandler } from "next/dist/shared/lib/utils"
import { updatePage } from "../../../firebase/database"

const handler: NextApiHandler = async (req, res) => {
  const body = JSON.parse(req.body)
  await updatePage(body.slug as string, body.pageValues)
  res.status(200).send({ result: "ok" })
}

export default handler
