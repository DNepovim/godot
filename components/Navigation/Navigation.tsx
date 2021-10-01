/** @jsxImportSource @emotion/react */
import React from "react"
import Link from "next/link"
import Image, { ImageProps } from "next/image"
import { theme } from "../../theme"
import { css } from "@emotion/react"

interface NavigationItem {
	title: string
	link: string
}

export const Navigation: React.FC<{logo: ImageProps["src"], data: NavigationItem[]}> = ({logo, data}) => (
	<div css={css`
		background-color: ${theme.color.background};
		width: 100vw;
	`}>
		<nav css={css`
			display: flex;
			justify-content: space-between;
			align-items: center;
			max-width: ${theme.layout.width}px;
			margin: 0 auto;
			padding: 0;
		`}>
			<Link href="/">
				<a>
					<Image
						css={css`
							padding: 8px;
						`}
						src={logo}
						alt="Insomnia – logo"
						width={90}
						height={90}
					/>
				</a>
			</Link>
			<ul css={css`
				display: flex;
				list-style: none;
				margin: 0;
				padding: 0;
			`}>
				{data.map(item => (
					<li
						css={css`
							margin-left: 4px;
						`}
						key={item.link}
					>
						<Link href={item.link}>
							<a css={css`
								position: relative;
								display: block;
								text-decoration: none;
								padding: 0.4rem;
								transition: color 300ms;
								font-family: themix;

								&:after {
									content: "";
									display: block;
									position: absolute;
									right: 0;
									bottom: 0;
									left: 0;
									width: 0;
									height: 2px;
									transition: width 300ms;
									background-color: ${theme.color.brand};
								}

								&:hover {
									text-decoration: none;
									color: ${theme.color.brand};

									&:after {
										width: 100%;
									}
								}
							`}>{item.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	</div>
)