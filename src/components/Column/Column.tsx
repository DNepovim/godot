import React from "react"
import { tp } from "../../utils/tp"
import { Icon } from "../Icon/Icon"
import { Icons } from "../../blocks/Columns/columnsDef"
import styled from "@emotion/styled"

export interface ColumnProps {
  title: string
  text: string
  icon: Icons
}

export const Column: React.FC<ColumnProps> = ({ title, text, icon }) => (
  <article>
    <Header>
      {icon && (
        <Figure>
          <Icon icon={icon} />
        </Figure>
      )}
      <Heading>{tp(title)}</Heading>
    </Header>
    <RichText dangerouslySetInnerHTML={{ __html: text }} />
  </article>
)

const Header = styled.header`
  display: flex;
  align-items: flex-end;
`

const Figure = styled.figure`
  margin: -20px;
  z-index: -5;
  transform: scale(1.2, 1.2);
  user-select: none;
  width: 80px;
  height: 80px;
`

const Heading = styled.h3`
  margin: 0 0 10px;
`

const RichText = styled.div`
  h4 {
    margin: 0.6em 0 0;
    &:first-of-type {
      margin: 0;
    }
  }
  ul {
    padding-left: 1.4em;
    margin: 0;
  }
`
