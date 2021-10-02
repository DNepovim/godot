/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react"
import { Container } from "../../components/Container/Container"
import { theme } from "../../theme"

interface Props {
	title: string
	text: string
	textAlign: string
}

export const RichText: React.FC<{data: Props}> = ({data}) => (
	<section>
		<Container
			css={css`
				text-align: ${data.textAlign};
			`}
		>
			<h2 css={css`font-size: ${theme.font.sizes[3]}; font-family: skautbold`}>{data.title}</h2>
			<div dangerouslySetInnerHTML={{__html: data.text}} />
		</Container>
	</section>

)