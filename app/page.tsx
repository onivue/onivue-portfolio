import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Skills } from '@/components/skills'

export default function Home() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                <Hero />
                <Skills />
            </main>
            <Footer />
        </>
    )
}
