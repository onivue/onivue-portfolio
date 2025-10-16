import type { Metadata } from 'next'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
    title: 'Albin Hoti | Developer Portfolio',
    description:
        'Portfolio of Albin Hoti - Full Stack Developer specializing in React, Next.js, and TypeScript',
    keywords: [
        'Albin Hoti',
        'onivue',
        'developer',
        'portfolio',
        'React',
        'Next.js',
        'TypeScript',
        'Full Stack',
    ],
    authors: [{ name: 'Albin Hoti' }],
    creator: 'Albin Hoti',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://www.onivue.ch/',
        title: 'Albin Hoti | Developer Portfolio',
        description:
            'Portfolio of Albin Hoti - Full Stack Developer specializing in React, Next.js, and TypeScript',
        siteName: 'Albin Hoti Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Albin Hoti | Developer Portfolio',
        description:
            'Portfolio of Albin Hoti - Full Stack Developer specializing in React, Next.js, and TypeScript',
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
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem={true}
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
