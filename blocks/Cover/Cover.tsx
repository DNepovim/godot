/** @jsxImportSource @emotion/react */
import React from "react"
import { theme } from "../../theme"
import { css } from "@emotion/react"
import { ParallaxBanner } from "react-scroll-parallax"
import { Container } from "../../components/Container/Container"

interface Props {
	title: string,
	subtitle: string,
	claim: string,
	button: {
		label: string,
		link: string,
		targetBlank: boolean
	}
}

export const Cover: React.FC<{data: Props}> = ({data}) => (
	<section css={css`
		position: relative;
		width: 100vw;
	`}>
		<ParallaxBanner
			layers={[
				{
					image: "/images/cover.png",
					amount: 0.2,
				}
			]}
		>
			<Container>
				<h1 css={css`
					font-family: skautbold;
					font-size: ${theme.font.sizes[4]};
					font-weight: bold;
					color: white;
				`}>
					{data.title}
				</h1>
				<p css={css`
					font-family: themix;
					font-size: ${theme.font.sizes[3]};
					font-weight: bold;
					color: white;
				`}>
					{data.subtitle}
				</p>
				<p css={css`
					font-size: ${theme.font.sizes[2]};
					font-family: themix;
					font-weight: bold;
					color: white;
				`}>
					{data.claim}
				</p>
				<a
					href={data.button.link}
					{...(data.button.targetBlank ? {
						target: "_blank",
						rel: "noreferrer noopener"
					} : {})}
					css={css`
						display: inline-block;
						font-family: themix;
						font-size: ${theme.font.sizes[2]};
						color: white;
						padding: 0.6em 1em;
						border-radius: 4px;
						text-decoration: none;
						background-color: ${theme.color.brand};
					`}
				>
					{data.button.label}
				</a>
			</Container>
		</ParallaxBanner>
	</section>
)