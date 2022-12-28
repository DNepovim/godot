import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { min, theme } from "../../styles/theme"
import { tp } from "../../utils/tp"

export interface Person {
  image: string
  nick: string
  name: string
  text: string
}

export interface PersonProps extends Person {}

export const Person: React.FC<PersonProps> = ({ image, nick, name, text }) => (
  <Article>
    <Figure>
      <PersonImage
        src={`/images/${image}.webp`}
        alt={nick}
        width={170}
        height={170}
      />
      <Frame src={`/images/frame.svg`} alt="" />
    </Figure>
    <PersonNick>{tp(nick)}</PersonNick>
    <PersonName>{tp(name)}</PersonName>
    <p dangerouslySetInnerHTML={{ __html: tp(text) }} />
  </Article>
)

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

const PersonImage = styled(StaticImage)`
  width: 5em;
  height: 5em;
  border-radius: 50%;
  margin: 1em auto;
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
