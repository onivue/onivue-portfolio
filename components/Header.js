import clsx from 'clsx'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import React, { useCallback, useEffect, useState } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'
import { Container } from '@/components/Container'
import LogoIcon from './LogoIcon'
// import useSound from 'use-sound'

// import { useHeaderVisible } from "./libs/useHeaderVisible";
export const useHeaderVisible = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)

    const handleScroll = useCallback(() => {
        const currentScrollPos = window.pageYOffset

        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)

        setPrevScrollPos(currentScrollPos)
    }, [setVisible, setPrevScrollPos, prevScrollPos])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    return visible
}

const Themes = {
    light: 'light',
    dark: 'dark',
}

export const Header = () => {
    // const [playOnDark] = useSound('/sounds/dark-on.mp3')
    // const [playOnLight] = useSound('/sounds/light-on.mp3')
    const visible = useHeaderVisible()

    const [mounted, setMounted] = useState(false)

    const { theme, setTheme } = useTheme()

    const toggleTheme = useCallback(() => {
        // if (theme === Themes.light) {
        //     playOnLight()
        // } else {
        //     playOnDark()
        // }
        console.log(theme)

        setTheme(theme === Themes.light ? Themes.dark : Themes.light)
    }, [setTheme, theme /*playOnDark, playOnLight*/])

    useEffect(() => setMounted(true), [])

    return (
        <>
            <div
                className={clsx(
                    'fixed z-20 w-full animate-fade-in  opacity-90 backdrop-blur-sm duration-300',
                    'border-b-2 border-primary-200 border-opacity-0  ',
                    visible ? 'top-0' : '-top-[5rem]',
                )}
            >
                <Container>
                    <div className="flex w-auto items-center justify-between py-4 ">
                        <Link href="/">
                            <a href="/">
                                <div className="flex">
                                    <div className="rounded-full fill-current p-2">
                                        <LogoIcon className="h-8 w-8" onClick={null} />
                                    </div>
                                    <div className="ml-4 self-center">onivue</div>
                                </div>
                            </a>
                        </Link>
                        <div className="flex items-center">
                            <button
                                className="d-flex h-12 w-12 items-center justify-center rounded-xl ring-primary-200 focus:outline-none focus:ring-2 dark:bg-gray-900"
                                onClick={toggleTheme}
                            >
                                {mounted ? (
                                    theme === Themes.light ? (
                                        <HiMoon className="ml-1 inline h-6 w-6" />
                                    ) : (
                                        <HiSun className="inline h-6 w-6" />
                                    )
                                ) : null}
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
