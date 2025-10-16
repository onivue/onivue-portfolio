'use client'

import { Moon, Sun } from 'lucide-react'
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
                        className="text-2xl font-bold uppercase tracking-tight hover:underline"
                    >
                        ONIVUE
                    </Link>
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="border-4 border-black bg-white p-2 hover:bg-gray-100 dark:border-white dark:bg-black dark:hover:bg-gray-900"
                        aria-label="Toggle theme"
                    >
                        {mounted ? (
                            theme === 'light' ? (
                                <Moon className="h-6 w-6" />
                            ) : (
                                <Sun className="h-6 w-6" />
                            )
                        ) : null}
                    </button>
                </div>
            </Container>
        </header>
    )
}
