// app/layout.tsx
import './globals.css';
import { AuthContextProvider } from './context/AuthContext';
import React from 'react';

const Instructions: React.FC = () => {
	return (
		<div className="Instruction">
			<h2>Game Instructions</h2>
			<ol>
				<li>Use the arrow keys to move your character.</li>
				<li>Avoid obstacles and collect coins to score points.</li>
				<li>Press the spacebar to pause or resume the game.</li>
				<li>The game ends when you collide with an obstacle.</li>
			</ol>
		</div>
	);
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<AuthContextProvider>
					<Instructions />
					{children}
				</AuthContextProvider>
			</body>
		</html>
	);
}
