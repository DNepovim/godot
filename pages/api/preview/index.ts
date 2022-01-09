import { NextApiHandler } from "next"
import { getPage } from "../../../firebase/database"

const handler: NextApiHandler = async (req, res) => {
  if (req.query.secret !== process.env.NEXT_PUBLIC_PREVIEW_TOKEN) {
    return res.status(401).json({ message: "Invalid token" })
  }

  const page = await getPage(req.query.slug as string)

  if (!page) {
    return res.status(401).json({ message: "Invalid slug" })
  }

  res.setPreviewData({})

  // TODO: res.redirect(page.slug)
  res.redirect(req.query.slug as string)
}

export default handler
