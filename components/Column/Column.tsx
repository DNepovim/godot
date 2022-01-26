/** @jsxImportSource @emotion/react */
import React from "react"
import { css } from "@emotion/react"
import { tp } from "../../admin/utils/tp"
import Image from "next/image"
import { theme } from "../../theme"

export interface ColumnProps {
  title: string
  text: string
  icon: string
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
            user-select: none; ;
          `}
        >
          <Image
            src={`/images/${icon}.svg`}
            alt=""
            width={80}
            height={80}
            lazyBoundary="600px"
          />
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
        ul {
          margin: 0;
        }
      `}
      dangerouslySetInnerHTML={{ __html: tp(text) }}
    />
  </article>
)
