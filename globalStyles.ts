/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "./theme";

export const globalStyles = css`
	@font-face {
		font-family: 'skautbold';
		src: url('../fonts/skaut-bold-webfont.eot');
		src: url('../fonts/skaut-bold-webfont.eot?#iefix') format('embedded-opentype'),
			url('../fonts/skaut-bold-webfont.woff2') format('woff2'),
			url('../fonts/skaut-bold-webfont.woff') format('woff'),
			url('../fonts/skaut-bold-webfont.ttf') format('truetype'),
			url('../fonts/skaut-bold-webfont.svg#skautbold') format('svg');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'themix';
		src: url('../fonts/themixc5-4_semilight-webfont.eot');
		src: url('../fonts/themixc5-4_semilight-webfont.eot?#iefix') format('embedded-opentype'),
			url('../fonts/themixc5-4_semilight-webfont.woff2') format('woff2'),
			url('../fonts/themixc5-4_semilight-webfont.woff') format('woff'),
			url('../fonts/themixc5-4_semilight-webfont.ttf') format('truetype'),
			url('../fonts/themixc5-4_semilight-webfont.svg#themix_c5semilight') format('svg');
		font-weight: normal;
		font-style: normal;
		font-display: auto;
	}

	@font-face {
		font-family: 'themix';
		src: url('../fonts/themixc5-4isemilightita-webfont.eot');
		src: url('../fonts/themixc5-4isemilightita-webfont.eot?#iefix') format('embedded-opentype'),
			url('../fonts/themixc5-4isemilightita-webfont.woff2') format('woff2'),
			url('../fonts/themixc5-4isemilightita-webfont.woff') format('woff'),
			url('../fonts/themixc5-4isemilightita-webfont.ttf') format('truetype'),
			url('../fonts/themixc5-4isemilightita-webfont.svg#themix_c5semilight_italic') format('svg');
		font-weight: normal;
		font-style: italic;
		font-display: auto;
	}

	@font-face {
		font-family: 'themix';
		src: url('../fonts/themixc5-7_bold-webfont.eot');
		src: url('../fonts/themixc5-7_bold-webfont.eot?#iefix') format('embedded-opentype'),
			url('../fonts/themixc5-7_bold-webfont.woff2') format('woff2'),
			url('../fonts/themixc5-7_bold-webfont.woff') format('woff'),
			url('../fonts/themixc5-7_bold-webfont.ttf') format('truetype'),
			url('../fonts/themixc5-7_bold-webfont.svg#themix_c5bold') format('svg');
		font-weight: bold;
		font-style: normal;
		font-display: auto;
	}

	@font-face {
		font-family: 'themix';
		src: url('../fonts/themixc5-7ibolditalic-webfont.eot');
		src: url('../fonts/themixc5-7ibolditalic-webfont.eot?#iefix') format('embedded-opentype'),
			url('../fonts/themixc5-7ibolditalic-webfont.woff2') format('woff2'),
			url('../fonts/themixc5-7ibolditalic-webfont.woff') format('woff'),
			url('../fonts/themixc5-7ibolditalic-webfont.ttf') format('truetype'),
			url('../fonts/themixc5-7ibolditalic-webfont.svg#themix_c5bold_italic') format('svg');
		font-weight: bold;
		font-style: italic;
		font-display: auto;
	}

	body {
		margin: 0;
		padding: 0;
		font-size: 18px;
		font-family: themix;
	}

	a {
		color: ${theme.color.brand};
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	::selection {
		background-color: ${theme.color.brand};
	}
`