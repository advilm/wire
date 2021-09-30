import React from 'react';
import 'tailwindcss/tailwind.css';
import { Button, Typography } from '@mui/material';
import Layout from '../components/Layout';
import Login from '../components/Login';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
	const [login, setLogin] = React.useState(false);

	return (
		<Layout>
			<AnimatePresence exitBeforeEnter={true} initial={false}>
				{login && <Login callback={setLogin} login={false}/>}
			</AnimatePresence>
			<div className='flex flex-col items-center justify-center text-center'>
				<Typography className='font-bold text-5xl mb-3 leading-normal tracking-tight'>
					Open-source communications platform
				</Typography>
				<Button variant='contained' className='text-lg py-2.5 px-4 leading-snug' onClick={() => setLogin(true)}>Get Started</Button>
			</div>
		</Layout>
	);
}
