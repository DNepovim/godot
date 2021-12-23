import { NextApiHandler } from "next/dist/shared/lib/utils"
import { vercelApiCall } from "../../../admin/utils/vercelApiCall"

const handler: NextApiHandler = async (req, res) => {
  const apiToken = process.env.VERCEL_API_TOKEN
  const projectName = process.env.VERCEL_PROJECT_NAME
  if (!apiToken || !projectName) {
    res
      .status(500)
      .send({ message: "Vercel API token or project name is not defined." })
    return
  }

  try {
    const result = await vercelApiCall({
      method: "POST",
      endpoint: "v13/deployments?forceNew=1",
      body: {
        name: "insomnia",
        gitSource: {
          repoId: process.env.VERCEL_GIT_REPO_ID,
          ref: process.env.VERCEL_GIT_REPO_BRANCH,
          type: process.env.VERCEL_GIT_PROVIDER,
        },
      },
    })
    if (result.error) {
      res.status(500).json(result)
      return
    }
    res.status(200).json(result)
  } catch (e) {
    res.status(500).json(e)
  }
}

export default handler
