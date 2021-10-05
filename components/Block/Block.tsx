/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react"
import { theme } from "../../theme"

export interface BlockProps {
	id?: string
	withBackground?: boolean
}

export const Block: React.FC<BlockProps> = ({id, withBackground, children}) => <section id={id}  css={withBackground ? css`background-color: ${theme.color.beige};` : {}}>{children}</section>