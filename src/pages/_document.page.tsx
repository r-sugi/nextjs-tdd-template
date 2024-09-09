import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
	render() {
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
				</Head>
				<body>
					<Main />
					<div id="portal" />
					<NextScript />
				</body>
			</Html>
		);
	}
}
