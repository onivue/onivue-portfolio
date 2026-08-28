import type { Metadata, Viewport } from 'next';

import { Analytics } from '@vercel/analytics/next';
import { Archivo, Instrument_Sans } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import '@/styles/globals.css';

const archivo = Archivo({
	subsets: ['latin'],
	axes: ['wdth'],
	variable: '--font-archivo',
	display: 'swap',
});

const instrument = Instrument_Sans({
	subsets: ['latin'],
	variable: '--font-instrument',
	display: 'swap',
});

const DESCRIPTION =
	'Albin Hoti — full-stack developer building fast, considered interfaces with React, Next.js and TypeScript.';

export const metadata: Metadata = {
	metadataBase: new URL('https://www.onivue.ch'),
	title: {
		default: 'Albin Hoti — Full-Stack Developer',
		template: '%s — onivue',
	},
	description: DESCRIPTION,
	keywords: [
		'Albin Hoti',
		'onivue',
		'developer',
		'portfolio',
		'React',
		'Next.js',
		'TypeScript',
		'Full Stack',
		'Switzerland',
	],
	authors: [{ name: 'Albin Hoti', url: 'https://www.onivue.ch' }],
	creator: 'Albin Hoti',
	applicationName: 'onivue',
	appleWebApp: {
		title: 'onivue',
		capable: true,
		statusBarStyle: 'black-translucent',
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://www.onivue.ch/',
		title: 'Albin Hoti — Full-Stack Developer',
		description: DESCRIPTION,
		siteName: 'onivue',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Albin Hoti — Full-Stack Developer',
		description: DESCRIPTION,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#f4f5f7' },
		{ media: '(prefers-color-scheme: dark)', color: '#0b0c0e' },
	],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en' suppressHydrationWarning className={`${archivo.variable} ${instrument.variable}`}>
			<body>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}
