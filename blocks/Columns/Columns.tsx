/** @jsxImportSource @emotion/react */
import React from "react"
import { css } from "@emotion/react"
import { tp } from "../../admin/utils/tp"
import { theme } from "../../theme"
import { Container } from "../../components/Container/Container"
import { Column } from "../../components/Column/Column"
import { Heading } from "../../components/Heading/Heading"
import { Block } from "../../components/Block/Block"
import { ColumnsFields } from "./columnsDef"

export const Columns: React.FC<ColumnsFields> = ({ id, title, columns }) => (
  <Block id={id} backgroundColor={theme.color.beige}>
    <Container>
      <Heading level={2}>{tp(title)}</Heading>
      <div
        css={css`
          margin: 70px -16px 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        `}
      >
        {columns?.map((column, i) => (
          <div
            key={i}
            css={css`
              width: ${theme.layout.width / 3 - 8}px;
              padding: 4px 16px;
              box-sizing: border-box;
              margin-bottom: 16px;
            `}
          >
            <Column {...column} />
          </div>
        ))}
      </div>
    </Container>
  </Block>
)
