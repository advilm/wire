import React from 'react';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import { ThemeProvider } from '@mui/material/styles';

import { SnackbarProvider } from 'notistack';
import { Alert, CssBaseline } from '@mui/material';

import theme from '../lib/theme';
  
function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>WireChat</title>

				<meta charSet='utf-8'/>
				<meta name='viewport' content='initial-scale=1.0, width=device-width'/>

				<meta name="title" content="WireChat"/>
				<meta name="description" content="Open source chat platform"/>

				<meta property="og:type" content="website"/>
				<meta property="og:url" content="https://wirechat.cf/"/>
				<meta property="og:title" content="WireChat"/>
				<meta property="og:description" content="Open source chat platform"/>
			</Head>
			<RecoilRoot>
				<ThemeProvider theme={theme}>
					<CssBaseline>
						<SnackbarProvider
							maxSnack={3}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'center',
							}}
							autoHideDuration={3000}
							preventDuplicate
							content={(key, data) => (
								<Alert id={key} variant='filled' severity={data[0]}>{data[1]}</Alert>
							)}
						>
							<Component {...pageProps}/>
						</SnackbarProvider>
					</CssBaseline>
				</ThemeProvider>
			</RecoilRoot>
		</>
	);
}

export default App;
