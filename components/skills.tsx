'use client'

import { useEffect, useState } from 'react'
import { Container } from '@/components/container'
import { cn } from '@/lib/utils'

const skills = [
    { name: 'React', category: 'Framework' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'Astro', category: 'Framework' },
    { name: 'Playwright', category: 'Testing' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Runtime' },
    { name: 'Bun.js', category: 'Runtime' },
    { name: 'Figma', category: 'Design' },
    { name: 'Vercel', category: 'Platform' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Supabase', category: 'Backend' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'Vite', category: 'Build Tool' },
    { name: 'GitHub', category: 'Tools' },
    { name: 'VS Code', category: 'Tools' },
]

const DURATION = 1_600
const COUNT = 6

export function Skills() {
    const [animatingCards, setAnimatingCards] = useState<Set<number>>(new Set())

    useEffect(() => {
        const timeouts: NodeJS.Timeout[] = []

        const animateCard = (index: number) => {
            setAnimatingCards((prev) => new Set(prev).add(index))
            // remove after animation duration
            const timeout = setTimeout(() => {
                setAnimatingCards((prev) => {
                    const newSet = new Set(prev)
                    newSet.delete(index)
                    return newSet
                })
            }, DURATION)
            timeouts.push(timeout)
        }

        const scheduleNextAnimation = () => {
            const count = Math.floor(Math.random() * COUNT) + 1
            const indices = new Set<number>()
            // generate unique random indices
            while (indices.size < count) {
                const randomIndex = Math.floor(Math.random() * skills.length)
                indices.add(randomIndex)
            }
            // animate selected cards
            for (const index of indices) animateCard(index)
            // schedule next animation with random delay
            const nextDelay = DURATION
            const timeout = setTimeout(scheduleNextAnimation, nextDelay)
            timeouts.push(timeout)
        }

        scheduleNextAnimation()

        return () => {
            for (const timeout of timeouts) {
                clearTimeout(timeout)
            }
        }
    }, [])

    return (
        <section className="py-24">
            <Container>
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-black uppercase">SKILLS</h2>
                        <p className="max-w-2xl text-lg uppercase">
                            Technologies I work with to bring ideas to life
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                        {skills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className={cn(
                                    `border-4 border-black bg-white p-6 transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:border-white dark:bg-black`,
                                    animatingCards.has(index)
                                        ? 'translate-x-1 translate-y-1 shadow-none dark:border-pink-400 border-pink-400  border-dotted'
                                        : 'shadow-retro-md',
                                )}
                            >
                                <div className="space-y-3">
                                    <h3 className="text-xl uppercase ">{skill.name}</h3>
                                    <span className="inline-block border border-black px-2 py-0.5 text-[11px]  uppercase dark:border-white">
                                        {skill.category}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
