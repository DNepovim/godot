interface VercelApiPostCallConfig {
  method: "POST"
  endpoint: string
  body?: object
}

interface VercelApiGetCallConfig {
  method: "GET"
  endpoint: string
}

export type VercelApiCallConfig = VercelApiGetCallConfig | VercelApiPostCallConfig

export const vercelApiCall = async (config: VercelApiCallConfig, parseBody: boolean = true) => {
  const result = await fetch(`https://api.vercel.com/${config.endpoint}`, {
    method: config.method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.VERCEL_API_TOKEN}`,
    },
    ...("body" in config ? { body: JSON.stringify(config.body)} : {})
  })
  if (parseBody) {
    return await result.json()
  }
  return result
}