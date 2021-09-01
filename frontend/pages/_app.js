import React from 'react';
import 'tailwindcss/tailwind.css';

import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { GeistProvider, CssBaseline } from '@geist-ui/react';

function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>WireChat</title>

				<meta charSet='utf-8'/>
				<meta name='viewport' content='initial-scale=1.0, width=device-width'/>

				<meta name="title" content="WireChat"/>
				<meta name="description" content="Open source chat application."/>

				<meta property="og:type" content="website"/>
				<meta property="og:url" content="https://wirechat.cf/"/>
				<meta property="og:title" content="WireChat"/>
				<meta property="og:description" content="Open source chat application."/>
			</Head>
			<RecoilRoot>
				<GeistProvider>
					<CssBaseline/>
					<Component {...pageProps}/>
				</GeistProvider>
			</RecoilRoot>
		</>
	);
}

export default App;
