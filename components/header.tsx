'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Container } from '@/components/container'

export function Header() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <header className="fixed top-0 z-50 w-full border-b-4 border-black bg-white dark:border-white dark:bg-black">
            <Container>
                <div className="flex items-center justify-between py-4">
                    <Link
                        href="/"
                        className="text-2xl font-semibold uppercase tracking-tight hover:underline"
                    >
                        ONIVUE
                    </Link>
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="cursor-pointer border-4 border-black bg-white p-2 hover:bg-gray-100 dark:border-white dark:bg-black dark:hover:bg-gray-900"
                        aria-label="Toggle theme"
                    >
                        {mounted && theme === 'light' ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="size-6"
                                role="presentation"
                            >
                                <path d="M18 2h-8v2H8v2H6v4h2V6h2V4h4v2h-2v4h2v2h4v-2h2v4h-2v2h2v-2h2V6h-2v2h-2v2h-4V6h2V4h2V2ZM8 14v-2h4v2H8Zm0 2v-2H4v2H2v4h2v2h10v-2h2v-4h-2v-2h-2v2h2v4H4v-4h4Zm0 0h2v2H8v-2Z" />{' '}
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="size-6"
                                role="presentation"
                            >
                                <path d="M11 0h2v4h-2V0Zm1 12H8v2H4v2H2v4h2v2h10v-2h2v-4h-2v-2h-2v-2Zm0 2v2h2v4H4v-4h4v2h2v-2H8v-2h4ZM8 6h6v2H8V6Zm0 2v2H6V8h2Zm8 2h-2V8h2v2Zm0 0h2v2h-2v-2Zm4-8h2v2h-2V2Zm0 2v2h-2V4h2ZM2 2h2v2H2V2Zm2 2h2v2H4V4Zm20 7h-4v2h4v-2Z" />{' '}
                            </svg>
                        )}
                    </button>
                </div>
            </Container>
        </header>
    )
}
