import { NextApiHandler } from "next/dist/shared/lib/utils"
import { vercelApiCall } from "../../../admin/utils/vercelApiCall"

const handler: NextApiHandler = async (req, res) => {
  const apiToken = process.env.VERCEL_API_TOKEN
  const projectName = process.env.VERCEL_PROJECT_NAME
  const { id: deploymentId } = req.query
  if (!apiToken || !projectName || !deploymentId) {
    res.status(500).send({ message: "Vercel API token, project name or deployment id is not defined." })
    return
  }

  try {
    const result = await vercelApiCall({
      method: "GET",
      endpoint: `v13/deployments/${deploymentId}`
    })
    res.status(200).send(result)
  } catch (e) {
    res.status(500).send(e)
  }
}

export default handler
