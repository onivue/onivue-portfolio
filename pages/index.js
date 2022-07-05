import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CitationOverlay } from '@/components/CitationOverlay'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import Footer from '@/components/Footer'
import 'animate.css/animate.min.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function Home() {
    const [citation, setCitation] = useState(false)
    const [main, setMain] = useState(true)

    useEffect(() => {
        const ids = [
            setTimeout(() => setCitation(false), 2100),
            setTimeout(() => setMain(true), 2900),
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

                    <AnimationOnScroll animateIn="animate-fade-in-down" offset={0}>
                        <Hero />
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-fade-in-up" offset={0}>
                        <Projects />
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn="animate-fade-in-up"
                        animateOnce={true}
                        duration={0.5}
                    >
                        <Skills />
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-fade-in-up" offset={0}>
                        <Footer />
                    </AnimationOnScroll>
                </motion.div>
            )}
        </>
    )
}
