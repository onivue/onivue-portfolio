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

            <AnimationOnScroll animateIn="animate-fade-in-down" offset={0}>
                <Hero />
            </AnimationOnScroll>
            <div className="overflow-y-hidden">
                <AnimationOnScroll animateIn="animate-fade-in-up" offset={0} animateOnce={true}>
                    <Projects />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate-fade-in-up" animateOnce={true}>
                    <Skills />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate-fade-in-up" offset={0}>
                    <Footer />
                </AnimationOnScroll>
            </div>
        </>
    )
}
