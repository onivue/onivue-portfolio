import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import Footer from '@/components/Footer'
import 'animate.css/animate.min.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function Home() {
    return (
        <>
            <Header />

            <main className="animate-fade-in overflow-y-hidden">
                <Hero />
                <Projects />
                <Skills />
                <Footer />
            </main>
        </>
    )
}
