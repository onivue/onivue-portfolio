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
        <div
            className={clsx(
                'fixed z-20 w-full opacity-90  duration-300 ',
                'backdrop-filter backdrop-blur-sm  bg-opacity-80 dark:bg-opacity-100  border-amber-200 border-opacity-0',
                visible ? 'top-0' : '-top-[5rem] border-amber-200 border-b-8 border-opacity-100',
            )}
        >
            <Container>
                <div className="flex items-center justify-between w-auto py-4 ">
                    <Link href="/">
                        <a href="/">
                            <div className="flex">
                                <div className="p-2 rounded-full fill-current dark:bg-white">
                                    <LogoIcon
                                        className="w-8 h-8 filter drop-shadow-md drop-s"
                                        onClick={null}
                                    />
                                </div>
                                <div className="self-center ml-4">onivue</div>
                            </div>
                        </a>
                    </Link>
                    <div className="flex items-center">
                        <button
                            className="items-center justify-center w-12 h-12 rounded-md dark:bg-gray-900 focus:outline-none focus:ring-2 ring-amber-200 d-flex"
                            onClick={toggleTheme}
                        >
                            {mounted ? (
                                theme === Themes.light ? (
                                    <HiMoon className="inline w-6 h-6 ml-1" />
                                ) : (
                                    <HiSun className="inline w-6 h-6" />
                                )
                            ) : null}
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
