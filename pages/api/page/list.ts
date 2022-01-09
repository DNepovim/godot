import { NextApiHandler } from "next/dist/shared/lib/utils"
import { getPages } from "../../../firebase/database"

const handler: NextApiHandler = async (req, res) => {
  const pages = await getPages()
  res.status(200).send(pages)
}

export default handler
