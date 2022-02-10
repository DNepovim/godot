/** @jsxImportSource @emotion/react */
import React from "react"
import { css } from "@emotion/react"
import { tp } from "../../admin/utils/tp"
import { Container } from "../../components/Container/Container"
import { Heading } from "../../components/Heading/Heading"
import Image from "next/image"
import { Block } from "../../components/Block/Block"
import { PersonsFields } from "./personsDef"
import { min, theme } from "../../styles/theme"

export const Persons: React.FC<PersonsFields> = ({
  id,
  title,
  subtitle,
  persons,
}) => (
  <Block id={id} backgroundColor={theme.color.sky}>
    <Container
      css={css`
        text-align: center;
        *::selection {
          background-color: ${theme.color.darkBlue};
        }
      `}
    >
      {title && <Heading color={theme.color.darkBlue}>{tp(title)}</Heading>}
      {subtitle && (
        <p
          css={css`
            text-align: center;
            margin-bottom: 64px;
          `}
        >
          {tp(subtitle)}
        </p>
      )}
    </Container>
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        max-width: 1600px;
        padding: 0 32px;
        justify-content: center;
        margin: 0 auto;
        *::selection {
          background-color: ${theme.color.darkBlue};
        }
      `}
    >
      {persons.map((person, i) => (
        <article
          key={i}
          css={css`
            max-width: 900px;
            margin: 0 0 32px;
            @media ${min("s")} {
              margin: 0 32px 32px;
            }
            @media ${min("l")} {
              width: 390px;
            }
          `}
        >
          <figure
            css={css`
              position: relative;
              margin: 0 1em 0 0;
              shape-outside: circle(50%);
              width: 174px;
              height: 174px;
              @media ${min("s")} {
                float: left;
              }
            `}
          >
            <Image
              css={css`
                width: 5em;
                height: 5em;
                border-radius: 50%;
                margin: 1em auto;
              `}
              src={`/images/${person.image}.webp`}
              alt={person.nick}
              width={170}
              height={170}
              lazyBoundary="1000px"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              css={css`
                position: absolute;
                left: 0;
                top: 0;
                margin: -4px;
                max-height: calc(100% + 4px);
              `}
              src={`/images/frame.svg`}
              alt=""
            />
          </figure>
          <h3
            css={css`
              font-size: 1.8rem;
              margin: 0;
              color: ${theme.color.darkBlue};
            `}
          >
            {tp(person.nick)}
          </h3>
          <p
            css={css`
              margin-top: 0;
            `}
          >
            <strong>{tp(person.name)}</strong>
          </p>
          <p dangerouslySetInnerHTML={{ __html: tp(person.text) }} />
        </article>
      ))}
    </div>
  </Block>
)
