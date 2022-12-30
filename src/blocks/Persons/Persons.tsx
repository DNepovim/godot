import React from "react"
import { tp } from "../../utils/tp"
import { CenteredContainer } from "../../components/Container/Container"
import { Heading } from "../../components/Heading/Heading"
import { Block } from "../../components/Block/Block"
import { PersonsFields } from "./personsDef"
import styled from "@emotion/styled"
import { Person } from "./Person"

export const Persons: React.FC<PersonsFields> = ({
  id,
  title,
  subtitle,
  persons,
}) => (
  <Block id={id} palette={"sky"}>
    <CenteredContainer>
      {title && <Heading>{tp(title)}</Heading>}
      {subtitle && <Subtitle>{tp(subtitle)}</Subtitle>}
    </CenteredContainer>
    <PersonsContianer>
      {persons.map((person, i) => (
        <Person key={`${person.nick}-${i}`} {...person} />
      ))}
    </PersonsContianer>
  </Block>
)

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 64px;
`

const PersonsContianer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1600px;
  padding: 0 32px;
  justify-content: center;
  margin: 0 auto;
`
