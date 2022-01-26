/** @jsxImportSource @emotion/react */
import React from "react"
import { css } from "@emotion/react"
import { tp } from "../../admin/utils/tp"
import Image from "next/image"
import { theme } from "../../theme"
import { Block } from "../../components/Block/Block"
import { ContactsFields } from "./contactsDef"
import { Container } from "../../components/Container/Container"

export const Contacts: React.FC<ContactsFields> = ({
  id,
  title,
  subtitle,
  contacts,
}) => (
  <Block id={id} backgroundColor={theme.color.brown}>
    <Container
      css={css`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        max-width: 800px;
        color: ${theme.color.beige};
        *::selection {
          background-color: ${theme.color.yellow};
        }
      `}
    >
      <h2
        css={css`
          font-size: ${theme.font.sizes[2]};
          font-family: skautbold;
          text-align: center;
          margin-bottom: 4px;
        `}
      >
        {tp(title)}
      </h2>
      <p
        css={css`
          font-size: 0.8em;
          a {
            color: ${theme.color.yellow};
          }
        `}
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        {contacts?.map((contact) => (
          <a
            key={contact.type}
            href={getHref(contact.url)}
            rel="noreferrer noopener"
            title={contact.type}
          >
            <Image
              css={css`
                width: 3em;
                height: 3em;
                margin-right: 8px !important;
              `}
              src={`/icons/${contact.icon}.svg`}
              alt=""
              width={70}
              height={70}
            />
          </a>
        ))}
      </div>
    </Container>
  </Block>
)

const getHref = (url: string): string =>
  url.includes("@") ? `mailto:${url}` : url
