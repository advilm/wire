import React from 'react';
import Link from 'next/link';
import { Button } from '@geist-ui/react';
import { Github } from '@geist-ui/react-icons';


export default function Nav() {
	return (
		<nav className='text-xl'>
			<div className='flex justify-between mx-2'>
				<Link href='/'>
					<a className='flex items-center py-4 text-primary-text'>
						<img src='icon.svg' alt='logo' width='28' height='28' className='mx-2'></img>
						<strong>WireChat</strong>
					</a>
				</Link>
				<div className='flex items-center'>
					<a href='https://github.com/advilm/wire' target='_blank' rel='noreferrer' className='mr-2 text-primary-text'>
						<Github/>
					</a>
					<Button auto type='success-light' scale={2 / 3} margin='4px'>Login</Button>
				</div>
			</div>
		</nav>
	);
}