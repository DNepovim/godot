/** @jsxImportSource @emotion/react */
import React from "react"
import { css } from "@emotion/react"
import { theme } from "../../theme"
import { Container } from "../../components/Container/Container"
import { Column } from "../../components/Column/Column"
import { Heading } from "../../components/Heading/Heading"

interface Props {
	title: string
	columns: {
		title: string
		text: string
		icon: string
	}[]
}

export const Columns: React.FC<Props> = ({title, columns}) => (
	<section css={css`
		background-color: ${theme.color.beige};
		padding: 64px 0;
	`}>
		<Container>
			<Heading level={2}>{title}</Heading>
			<div css={css`
				margin: 0 -16px;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
			`}>
				{columns.map((column, i) => (
					<div
						key={i}
						css={css`
							width: ${theme.layout.width / 3 - 8}px;
							padding: 4px 16px;
							box-sizing: border-box;
						`}
					>
						<Column {...column} />
					</div>
				))}
			</div>
		</Container>
	</section>
)