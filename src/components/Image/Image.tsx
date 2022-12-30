import { builder } from "@invertase/image-processing-api"
import {
  GatsbyImage,
  GatsbyImageProps,
  getImageData,
  IGetImageDataArgs,
  IUrlBuilderArgs,
} from "gatsby-plugin-image"
import React from "react"

const urlBuilder = ({
  baseUrl,
  width,
  height,
}: IUrlBuilderArgs<unknown>): string => {
  const imagesUrl = process.env.FIREBASE_IMAGES_URL
  if (!imagesUrl) {
    throw new Error(`Env variable FIREBASE_IMAGES_URL must be defined.`)
  }
  const operations = builder()
    .input({
      type: "url",
      url: encodeURI(baseUrl),
    })
    .resize({ width, height })
    .output({
      webp: {},
    })
  return `${imagesUrl}?operations=${operations.toEncodedString()}`
}

export type ImageProps = Omit<GatsbyImageProps, "image"> &
  Omit<IGetImageDataArgs, "urlBuilder" | "baseUrl"> & { src: string }

export const Image: React.FC<ImageProps> = (props) => (
  <GatsbyImage
    {...props}
    image={getImageData({
      ...props,
      baseUrl: props.src,
      urlBuilder,
    })}
  />
)
