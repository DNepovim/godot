/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react"

export interface ResponsiveVideoProps {
	src: string
	width: number
	height: number
}

export const ResponsiveVideo: React.FC<ResponsiveVideoProps> = ({src, width, height}) => (
	<figure css={css`
			position: relative;
			width: 100%;
			height: 0;
			padding-top: ${height/width*100}%;
			margin: 0;
	`}>
	<iframe
		css={css`
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100%;
		`}
		width={width}
		height={height}
		src={src}
		frameBorder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowFullScreen
	/>
</figure>

)