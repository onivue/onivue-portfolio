import { Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/container'

export function Hero() {
    return (
        <section className="pt-32">
            <Container>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-black md:text-6xl">HEY! I'M ALBIN</h1>
                            <div className="inline-block  bg-black px-4 py-1 dark:border-white dark:bg-white">
                                <p className="text-2xl uppercase text-white dark:text-black md:text-3xl ">
                                    DEVELOPER
                                </p>
                            </div>
                        </div>
                        <p className="max-w-md text-lg font-light uppercase">
                            Crafting digital experiences with clean code and creative solutions
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="https://github.com/onivue"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-4 border-black bg-white p-3 shadow-retro-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:border-white dark:bg-black"
                            >
                                <Github className="h-6 w-6" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/albin-hoti-a1991b237"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-4 border-black bg-white p-3 shadow-retro-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:border-white dark:bg-black"
                            >
                                <Linkedin className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="relative border-4 border-white  shadow-retro-lg dark:border-white dark:bg-white">
                            <Image
                                src="/images/me-px.png"
                                alt="Albin Hoti"
                                width={256}
                                height={256}
                                className="h-64 w-64 object-cover grayscale"
                                priority
                            />
                            {/* <div className="absolute inset-0 dot-grid" /> */}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
