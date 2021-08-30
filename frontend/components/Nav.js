import React from 'react';
import Link from 'next/link';

export default function Nav() {
	return (
		<nav className=' bg-primary-light text-xl'>
			<div className='flex justify-between mx-2'>
				<Link href='/'>
					<a className='flex items-center py-4'>
						<img src='favicon.ico' alt='logo' width='32' height='32' className='mx-2'></img>
						<strong>WireChat</strong>
					</a>
				</Link>
				<div className='flex items-center'>
					<a href='https://github.com/advilm/WireChat' target='_blank' rel='noreferrer' className='px-2 py-4 border-r-2 leading-3'>GitHub</a>
				</div>
			</div>
		</nav>
	);
}