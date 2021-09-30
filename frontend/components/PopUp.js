import React from 'react';
import { motion } from 'framer-motion';

export default function Layout({ children, callback }) {
	return (
		<>
			{children}
			<motion.div
				className='h-full w-full fixed z-10 bg-black bg-opacity-40'
				onClick={() => callback(false)}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0, transition: { duration: 0.25 } }}
				transition={{ duration: 0.25 }}
			/>
		</>
	);
}