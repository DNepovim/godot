/** @jsxImportSource @emotion/react */
import React from "react"
import { css } from "@emotion/react"
import { Container } from "../../components/Container/Container"
import { Heading } from "../../components/Heading/Heading"
import { theme } from "../../theme"
import Image from "next/image"
import { Block, BlockProps } from "../../components/Block/Block"

interface Props extends BlockProps {
  title: string
  subtitle: string
  persons: {
    nick: string
    name: string
    text: string
    image: string
  }[]
}

export const Persons: React.FC<Props> = ({id, title, subtitle, persons}) => (
  <Block id={id}>
    <Container>
      <Heading level={2}>{title}</Heading>
      <p>{subtitle}</p>
      <div css={css`
        @media (min-width: 500px) {
          column-count: 2;
          column-gap: 16px;
        }

        @media (min-width: 700px) {
          column-count: 3;
          column-gap: 32px;
        }

        @media (min-width: 1000px) {
          column-count: 4;
          column-gap: 64px;
        }
      `}>
        {persons.map((person, i) =>(
          <article
            key={i}
            css={css`
              display: inline-block;
              margin-bottom: 32px;
            `}>
            <Image
              css={css`
                background-color: ${theme.color.brand};
                width: 10em;
                height: 10em;
                border-radius: 50%;
                margin: 1em auto;
              `}
              src={person.image}
              alt={person.nick}
              width={300}
              height={300}
            />
            <h3 css={css`
              font-size: ${theme.font.sizes[2]};
              margin-bottom: 0;
            `}>
              {person.nick}
            </h3>
            <p css={css`
                margin-top: 0;
            `}>
              <strong>{person.name}</strong>
            </p>
            <p dangerouslySetInnerHTML={{ __html: person.text }} />
          </article>
        ))}
      </div>
    </Container>
  </Block>
)