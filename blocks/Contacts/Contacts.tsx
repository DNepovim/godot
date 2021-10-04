/** @jsxImportSource @emotion/react */
import React from "react"
import { css } from "@emotion/react"
import { ParallaxBanner } from "react-scroll-parallax"
import { theme } from "../../theme"

interface Props {
	title: string
	subtitle: string
	contacts: {
		type: string
		icon: string
		url: string
	}[]
}

export const Contacts: React.FC<Props> = ({title, subtitle, contacts}) => (
	<section>
		<ParallaxBanner
			layers={[
				{
					image: "/images/sky_wide.png",
					amount: 0.2,
				}
			]}
		>
			<div css={css`
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: center;
				text-align: center;
				max-width: 800px;
				height: 100%;
				margin: 0 auto;
				padding: 0 16px
			`}>
				<h2 css={css`
					font-size: ${theme.font.sizes[2]};
					font-family: skautbold;
					text-align: center;
					color: ${theme.color.brand};
					margin-bottom: 4px
				`}>
					{title}
				</h2>
				<p
					css={css`
						color: white;
						font-size: 0.8em;
					`}
					dangerouslySetInnerHTML={{ __html: subtitle }}
				/>
				<div css={css`
					display: flex;
					justify-content: center;
				`}>
					{contacts.map(contact => (
						<a
							key={contact.type}
							href={getHref(contact.url)}
							rel="noreferrer noopener"
							title={contact.type}
							css={css`
								background-color: ${theme.color.brand};
								border-radius: 8px;
								width: 48px;
								height: 48px;
								margin: 8px;
							`}
						/>
					))}
				</div>
			</div>
		</ParallaxBanner>
	</section>
)

const getHref = (url: string): string => url.includes("@") ? `mailto:${url}` : url