/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react"
import { theme } from "../../theme"
import * as yup from "yup"

export interface BlockFields {
  id?: string
  withBackground?: boolean
}

export const withBlockSchema = <T extends {}>(schema: yup.ObjectSchema<T>) => yup.object().shape({
  id: yup.string(),
  withBackground: yup.bool(),
}).concat(schema)

export const Block: React.FC<BlockFields> = ({id, withBackground, children}) => <section id={id}  css={withBackground ? css`background-color: ${theme.color.beige};` : {}}>{children}</section>