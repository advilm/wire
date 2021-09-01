import React from 'react';
import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';
import { Text, Button } from '@geist-ui/react';

export default function Home() {
	return (
		<Layout>
			<div className='flex items-center justify-center flex-col'>
				<Text h1>Open-source communications platform</Text>
				<Button auto type='success-light' scale={1.5}>Get Started</Button>
			</div>
		</Layout>
	);
}
