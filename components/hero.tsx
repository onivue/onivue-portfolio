import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Container } from '@/components/container'

export function Hero() {
    return (
        <section className="min-h-screen pt-32">
            <Container>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-black uppercase tracking-tighter md:text-6xl">
                                HEY! I'M
                                <br />
                                ALBIN
                            </h1>
                            <div className="inline-block border-4 border-black bg-black px-4 py-2 dark:border-white dark:bg-white">
                                <p className="text-2xl font-bold uppercase text-white dark:text-black md:text-3xl">
                                    DEVELOPER
                                </p>
                            </div>
                        </div>
                        <p className="max-w-md text-lg font-medium">
                            Make small things important & think out of the box
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="https://github.com/onivue"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-4 border-black bg-white p-3 hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:border-white dark:bg-black"
                                style={{ boxShadow: '4px 4px 0 0 currentColor' }}
                            >
                                <Github className="h-6 w-6" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/albin-hoti-a1991b237"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-4 border-black bg-white p-3 hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:border-white dark:bg-black"
                                style={{ boxShadow: '4px 4px 0 0 currentColor' }}
                            >
                                <Linkedin className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="relative">
                            <div
                                className="h-64 w-64 border-4 border-black bg-gray-200 dark:border-white dark:bg-gray-800"
                                style={{ boxShadow: '12px 12px 0 0 currentColor' }}
                            ></div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
