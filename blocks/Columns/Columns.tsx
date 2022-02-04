/** @jsxImportSource @emotion/react */
import React from "react"
import { css } from "@emotion/react"
import { tp } from "../../admin/utils/tp"
import { min, theme } from "../../theme"
import { Container } from "../../components/Container/Container"
import { Column } from "../../components/Column/Column"
import { Heading } from "../../components/Heading/Heading"
import { Block } from "../../components/Block/Block"
import { ColumnsFields } from "./columnsDef"
import styled from "@emotion/styled"

export const Columns: React.FC<ColumnsFields> = ({
  id,
  title,
  gridView,
  columns,
}) => (
  <Block id={id} backgroundColor={theme.color.beige}>
    <Container
      css={css`
        text-align: center;
      `}
    >
      <Heading>{tp(title)}</Heading>
      <Wrapper gridView={gridView}>
        {columns?.map((column, i) => (
          <ColumnWrapper key={i} gridView={gridView}>
            <Column {...column} />
          </ColumnWrapper>
        ))}
      </Wrapper>
    </Container>
  </Block>
)

const Wrapper = styled.div(
  (props: { gridView?: boolean }) => `
    margin: 36px -16px 0;
    text-align: left;

    @media ${min("l")} {
      margin-top: 80px;
      margin-bottom: 24px;
    }

    ${
      props.gridView
        ? `
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    `
        : `
      column-count: 1;
      @media ${min("m")} {
        column-count: 2;
      }
      @media ${min("l")} {
        column-count: 3;
      }
    `
    }
  `
)

const ColumnWrapper = styled.div(
  (props: { gridView?: boolean }) => `
    display: inline-block;
    padding: 4px 16px;
    margin-bottom: 42px;
    ${
      props.gridView
        ? `
      width: ${theme.layout.width / 3 - 8}px;
      box-sizing: border-box;
    `
        : ""
    }
  `
)
