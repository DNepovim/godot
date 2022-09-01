/** @jsxImportSource @emotion/react */
import React from "react"
import { css } from "@emotion/react"
import { tp } from "../../utils/tp"
import Image from "next/image"
import { theme } from "../../styles/theme"
import { Icon } from "../Icon/Icon"
import { Icons } from "../../blocks/Columns/columnsDef"

export interface ColumnProps {
  title: string
  text: string
  icon: Icons
}

export const Column: React.FC<ColumnProps> = ({ title, text, icon }) => (
  <article>
    <header
      css={css`
        display: flex;
        align-items: flex-end;
      `}
    >
      {icon && (
        <figure
          css={css`
            margin: -20px;
            z-index: -5;
            transform: scale(1.2, 1.2);
            user-select: none;
            width: 80px;
            height: 80px;
          `}
        >
          <Icon icon={icon} />
        </figure>
      )}
      <h3
        css={css`
          margin: 0 0 10px;
          color: ${theme.color.brown};
        `}
      >
        {tp(title)}
      </h3>
    </header>
    <div
      css={css`
        h4 {
          color: ${theme.color.brown};
          margin: 0.6em 0 0;
          &:first-of-type {
            margin: 0;
          }
        }
        ul {
          padding-left: 1.4em;
          margin: 0;
        }
      `}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  </article>
)
