import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="pt-BR">
			<Head>
				<meta charSet="UTF-8"></meta>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
				<link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />

				{/* SEO (Search Engine Optimization) */}
				<meta name="description" content="adicionaer" />
				<meta name="keywords" content="Adicionar" />
				<meta name="author" content="FGV Jr." />

				{/* SMO (Social Media Optimization) */}
				<meta property="og:title" content="Banda Last Bones" />
				<meta property="og:site_name" content="Last Bones" />
				<meta property="og:description" content="Adicionar" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}