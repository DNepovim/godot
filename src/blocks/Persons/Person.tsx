import styled from "@emotion/styled"
import { getDownloadURL, ref } from "firebase/storage"
import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import { Image } from "../../components/Image/Image"
import { storage } from "../../firebase/storage"
import { min, theme } from "../../styles/theme"
import { tp } from "../../utils/tp"
import frameImage from "../../images/frame.svg"

export interface Person {
  image: string
  nick: string
  name: string
  text: string
  isHidden?: boolean
}

export interface PersonProps extends Person {}

export const Person: React.FC<PersonProps> = ({ image, nick, name, text }) => {
  const [imageUrl, setImageUrl] = useState<string>()
  useEffect(() => {
    void (async () => {
      const objectRef = await ref(storage, `/images/${image}.webp`)
      const imageObjectUrl = await getDownloadURL(objectRef)
      setImageUrl(imageObjectUrl)
    })()
  }, [])
  return (
    <Article>
      <Figure>
        {imageUrl && (
          <PersonImage
            imgStyle={{ width: 170, height: 170 }}
            src={imageUrl}
            alt={nick}
            width={170}
            height={170}
          />
        )}
        <Frame src={frameImage} alt="" />
      </Figure>
      <PersonNick>{tp(nick)}</PersonNick>
      <PersonName>{tp(name)}</PersonName>
      <p dangerouslySetInnerHTML={{ __html: tp(text) }} />
    </Article>
  )
}

const Article = styled.article`
  max-width: 900px;
  margin: 0 0 32px;
  @media ${min("s")} {
    margin: 0 32px 32px;
  }
  @media ${min("l")} {
    width: 390px;
  }
`

const Figure = styled.figure`
  position: relative;
  margin: 0 1em 0 0;
  shape-outside: circle(50%);
  width: 174px;
  height: 174px;
  @media ${min("s")} {
    float: left;
  }
`

const PersonImage = styled(Image)`
  border-radius: 50%;
`

const Frame = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  margin: -4px;
  max-height: calc(100% + 4px);
`

const PersonNick = styled.h3`
  font-size: 1.8rem;
  margin: 0;
  color: ${theme.color.darkBlue};
`

const PersonName = styled.div`
  font-weight: strong;
  margin-top: 0;
`
