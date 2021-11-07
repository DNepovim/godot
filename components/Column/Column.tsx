/** @jsxImportSource @emotion/react */
import React from "react"
import { css } from "@emotion/react"
import Image from "next/image"

export interface ColumnProps {
  title: string
  text: string
  icon: string
}

export const Column: React.FC<ColumnProps> = ({title, text, icon}) => (
  <article>
    <header css={css`
      display: flex;
      align-items: flex-end;
    `}>
      <Image
        css={css`
          width: 3em;
          height: 3em;
          margin-right: 8px !important;
        `}
        src={`/icons/${icon}.svg`}
        alt=""
        width={100}
        height={100}
        lazyBoundary="600px"
      />
      <h3 css={css`margin: 0 0 20px`}>{title}</h3>
    </header>
    <p dangerouslySetInnerHTML={{__html: text}}/>
  </article>
)