import React, { useEffect, useState } from "react"
import {
  CenteredContainer,
  Container,
} from "../../components/Container/Container"
import { theme } from "../../styles/theme"
import { Block } from "../../components/Block/Block"
import { GalleryFields } from "./galleryDef"
import styled from "@emotion/styled"
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage"
import { firebaseApp } from "../../firebase/firebase"
import { Image } from "../../components/Image/Image"
import { Button } from "../../components/Button/Button"
import { storage } from "../../firebase/storage"

const gap = 4

export const Gallery: React.FC<GalleryFields> = ({ button, ...block }) => {
  const [imagesList, setImagesList] = useState<string[]>([])

  useEffect(() => {
    void (async () => {
      const objectRef = await ref(storage, "gallery")
      const list = await listAll(objectRef)
      setImagesList(
        await Promise.all(
          list.items.map(async (item) => await getDownloadURL(item))
        )
      )
    })()
  }, [])

  return (
    <Block {...block}>
      <GrdiContainer>
        {imagesList.map((image, i) => (
          <Figure key={image}>
            <Image
              src={image}
              width={theme.layout.width / 3}
              height={(theme.layout.width / 3) * 0.7}
              sizes={`(min-width: ${
                theme.layout.width - theme.layout.gap * 2
              }px) 268px, (min-width: 640px) calc((100vw - 7rem)/3), (min-width: 500px) calc((100vw - 7rem)/2),  calc((100vw - 5rem)/2)`}
              backgroundColor={theme.color.darkBlue}
              alt=""
            />
          </Figure>
        ))}
      </GrdiContainer>
      <ButtonContainer>
        <Button link={button.link} dark targetBlank={button.targetBlank}>
          {button.label}
        </Button>
      </ButtonContainer>
    </Block>
  )
}

const Figure = styled.figure`
  box-sizing: border-box;
  text-align: center;
  width: 100%;
  margin: 0;
`

const GrdiContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.layout.gap}px;
  padding-bottom: 18px;
`

const ButtonContainer = styled(CenteredContainer)`
  padding-top: 18px;
`
