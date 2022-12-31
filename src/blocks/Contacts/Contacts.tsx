import React from "react"
import { tp } from "../../utils/tp"
import { theme } from "../../styles/theme"
import { Block } from "../../components/Block/Block"
import { ContactsFields } from "./contactsDef"
import { ColumnContainer } from "../../components/Container/Container"
import styled from "@emotion/styled"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

export const Contacts: React.FC<ContactsFields> = ({
  title,
  subtitle,
  contacts,
  ...block
}) => (
  <Block {...block}>
    <ColumnContainer>
      <ContactHeading>{tp(title)}</ContactHeading>
      <SmallParagraph dangerouslySetInnerHTML={{ __html: subtitle }} />
      <FlexContainer>
        {contacts?.map((contact) => (
          <a
            key={contact.type}
            href={getHref(contact.url)}
            rel="noreferrer noopener"
            title={contact.type}
          >
            {/* <GatsbyImage
              style={{
                width: "3em",
                height: "3em",
                marginRight: "8px !important",
              }}
              src={`/icons/${contact.icon}.svg`}
              alt=""
              width={70}
              height={70}
            /> */}
          </a>
        ))}
      </FlexContainer>
    </ColumnContainer>
  </Block>
)

const getHref = (url: string): string =>
  url.includes("@") ? `mailto:${url}` : url

const ContactHeading = styled.h2`
  font-size: 1.8rem;
  font-family: ${theme.fonts.headings};
  text-align: center;
  margin-bottom: 4px;
`

const SmallParagraph = styled.p`
  font-size: 0.8em;
`

const FlexContainer = styled.p`
  display: flex;
  justify-content: center;
`
