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
    const [main, setMain] = useState(false)

    useEffect(() => {
        const ids = [
            setTimeout(() => setCitation(false), 1900),
            setTimeout(() => setMain(true), 2100),
        ]

        return () => ids.forEach((id) => clearTimeout(id))
    }, [setCitation])

    return (
        <>
            <CitationOverlay citation={citation} />
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

                    <Hero />
                    <Projects />
                    <Skills />
                    <Container></Container>
                    <Footer />
                </motion.div>
            )}
        </>
    )
}
