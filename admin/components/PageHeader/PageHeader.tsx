/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { PageHeaderProps } from "antd"
import React from "react"

export const PageHeader: React.FC<PageHeaderProps> = (props) => (
  <PageHeader
    {...props}
    css={css`
      .ant-page-header-heading-left {
        flex-direction: column;
        align-items: flex-start;
        h1 {
          margin: 0;
        }
      }
    `}
  />
)
