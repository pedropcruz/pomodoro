import { createGlobalStyle } from 'styled-components'
import variables from './variables.css'

const { color: { primaryColor }, font: { productSans } } = variables

const GlobalStyle = createGlobalStyle`


		/* http://meyerweb.com/eric/tools/css/reset/ 
		v2.0 | 20110126
		License: none (public domain)
	*/

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	/* cyrillic */
	@font-face {
		font-family: ${productSans};
		font-style: normal;
		font-weight: 400;
		src: local(${productSans}), local('ProductSans-Regular'), url(https://fonts.gstatic.com/s/productsans/v9/pxiDypQkot1TnFhsFMOfGShVE9eOYktMqlap.woff2) format('woff2');
		unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
	}
	/* greek */
	@font-face {
		font-family: ${productSans};
		font-style: normal;
		font-weight: 400;
		src: local(${productSans}), local('ProductSans-Regular'), url(https://fonts.gstatic.com/s/productsans/v9/pxiDypQkot1TnFhsFMOfGShVFNeOYktMqlap.woff2) format('woff2');
		unicode-range: U+0370-03FF;
	}
	/* latin-ext */
	@font-face {
		font-family: ${productSans};
		font-style: normal;
		font-weight: 400;
		src: local(${productSans}), local('ProductSans-Regular'), url(https://fonts.gstatic.com/s/productsans/v9/pxiDypQkot1TnFhsFMOfGShVGdeOYktMqlap.woff2) format('woff2');
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}
	/* latin */
	@font-face {
		font-family: ${productSans};
		font-style: normal;
		font-weight: 400;
		src: local(${productSans}), local('ProductSans-Regular'), url(https://fonts.gstatic.com/s/productsans/v9/pxiDypQkot1TnFhsFMOfGShVF9eOYktMqg.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	html, body{
		background-color: ${primaryColor};
	}
`

export default GlobalStyle
