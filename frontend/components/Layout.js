import React from 'react';
import Link from 'next/link';
import Login from './Login';
import { Button, Typography } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Layout({ children }) {
	const [login, setLogin] = React.useState(false);

	return (
		<div>
			<div className='flex flex-col bg-black text-white min-h-screen relative'>
				{/* <div className='pb-24'> */}
				<nav className='text-xl'>
					<AnimatePresence exitBeforeEnter={true} initial={false}>
						{login && <Login callback={setLogin} login={true}/>}
					</AnimatePresence>

					<div className='flex justify-between mx-2'>
						<Link href='/'>
							<a className='flex items-center py-4 text-white'>
								<img src='icon.svg' alt='logo' width='28' height='28' className='mx-2'></img>
								<Typography className='font-bold text-xl'>WireChat</Typography>
							</a>
						</Link>
						<div className='flex items-center'>
							<a href='https://github.com/advilm/wire' target='_blank' rel='noreferrer' className='mr-4 text-white'>
								<GitHubIcon className='text-4xl'/>
							</a>
							<Button variant='contained' onClick={() => setLogin(true)}>Login</Button>
						</div>
					</div>
				</nav>
				{children}
				{/* </div>
				<div className='flex-row text-center b-0 absolute w-full bottom-0 mb-2'>
					<Link href='/privacy'>Privacy Policy</Link>
					<Text className='m-0 mx-1 inline-block'>•</Text>
					<Link href='/terms'>Terms of Service</Link>
				</div> */}
			</div>
		</div>
	);
}