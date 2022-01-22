import Head from 'next/head'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CitationOverlay } from '@/components/CitationOverlay'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import Footer from '@/components/Footer'

export default function Home() {
    const [citation, setCitation] = useState(true)
    const [main, setMain] = useState(true)

    useEffect(() => {
        const ids = [
            setTimeout(() => setCitation(false), 4800),
            setTimeout(() => setMain(true), 5700),
        ]

        return () => ids.forEach((id) => clearTimeout(id))
    }, [setCitation])

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <CitationOverlay citation={citation} /> */}
            {main && (
                <motion.div
                    variants={{
                        initial: {
                            opacity: 0,
                            display: 'none',
                        },
                        visible: {
                            opacity: 1,
                            display: 'block',
                        },
                    }}
                    initial="initial"
                    animate={main ? 'visible' : 'initial'}
                    transition={{
                        duration: 1.0,
                    }}
                >
                    <Header />
                    <Container>
                        <Hero />
                        <Projects />
                        <Skills />
                    </Container>
                    <Footer />
                </motion.div>
            )}
        </>
    )
}
