/** @jsxImportSource @emotion/react */
import React from "react"
import { css } from "@emotion/react"
import Image from "next/image"
import starIcon from "../../images/icon_star.png"

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
        src={starIcon}
        alt=""
        width={80}
        height={80}
      />
      <h3 css={css`margin: 0`}>{title}</h3>
    </header>
    <p dangerouslySetInnerHTML={{__html: text}}/>
  </article>
)