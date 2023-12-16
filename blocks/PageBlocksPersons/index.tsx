"use client";
import React from "react";
import { tp } from "../../utils/tp";
import { CenteredContainer } from "../../components/Container/Container";
import { Heading } from "../../components/Heading/Heading";
import { Block } from "../../components/Block/Block";
import styled from "@emotion/styled";
import { Person } from "./Person";
import { PageBlocksPersons } from "../../tina/__generated__/types";

const Persons: React.FC<PageBlocksPersons> = ({ title, subtitle, persons, ...block }) => (
  <Block {...block}>
    <CenteredContainer>
      {title && <Heading>{tp(title)}</Heading>}
      {subtitle && <Subtitle>{tp(subtitle)}</Subtitle>}
    </CenteredContainer>
    <PersonsContianer>
      {persons
        .filter(({ isHidden }) => !isHidden)
        .map((person, i) => (
          <Person key={`${person.nickname}-${i}`} {...person} />
        ))}
    </PersonsContianer>
  </Block>
);

export default Persons;

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 64px;
`;

const PersonsContianer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1600px;
  padding: 0 32px;
  justify-content: center;
  margin: 0 auto;
`;
