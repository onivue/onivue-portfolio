import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'
import { MediaIcon } from '@/components/MediaIcon'
import { Container } from '@/components/Container'
import { HiExternalLink, HiLockClosed } from 'react-icons/hi'
import { useState } from 'react'
import Modal from './Modal'
import { SiFigma } from 'react-icons/si'

export const Projects = () => {
    return (
        <Container className="mb-14">
            <h2 className="mb-4 text-2xl font-bold text-black-900 dark:text-white">Projects</h2>
            <p className="text-base text-black-700 dark:text-white md:text-xl">
                Here are some of my most favourite projects that I enjoyed coding and designing from
                scratch.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <ProjectCard
                    title="onivue-resume"
                    text="User friendly web app to generate Resume's on the fly."
                    github="https://github.com/onivue/onivue-resume"
                    externalLink="https://resume.onivue.ch/"
                    tags={[
                        'react',
                        'react-hook-form',
                        'next.js',
                        'tailwindcss',
                        'zustand.js',
                        'react-pdf',
                        'headless-ui',
                    ]}
                    privateLink={false}
                />
                <ProjectCard
                    title="onivue-kanban"
                    text="Simplified Kanban planner for personal use that helps you organise your tasks."
                    github="https://github.com/onivue/onivue-kanban"
                    externalLink="https://kanban.onivue.ch/"
                    tags={[
                        'react',
                        'next.js',
                        'tailwindcss',
                        'zustand.js',
                        'headless-ui',
                        'firebase',
                        'react-beautiful-dnd',
                        'react-markdown',
                    ]}
                    privateLink={false}
                />
                <ProjectCard
                    title="onivue-webshop"
                    text="Modern Webshop Prototype with Tailwind and Next.js SSR"
                    github="https://github.com/onivue/onivue-webshop"
                    externalLink="https://webshop.onivue.ch/"
                    tags={['react', 'next.js', 'tailwindcss']}
                    privateLink={false}
                />
                <ProjectCard
                    title="onivue-bookmark"
                    text="Bookmark Manager"
                    github="https://github.com/onivue/onivue-bookmark"
                    externalLink="https://bookmark.onivue.ch/"
                    tags={[
                        'react',
                        'next.js',
                        'tailwindcss',
                        'headless-ui',
                        'firebase',
                        'zustand',
                        'react-hook-forms',
                    ]}
                />
                <ProjectCard
                    title="onivue-numerus"
                    text="Web counter app for fun game nights."
                    github="https://github.com/onivue/onivue-numerus"
                    externalLink="https://numerus.onivue.ch/"
                    tags={['react', 'next.js', 'tailwindcss', 'zustand.js', 'headless-ui']}
                    privateLink={false}
                />
                <ProjectCard
                    title="onivue-portfolio"
                    text="My Portfolio."
                    github="https://github.com/onivue/onivue-numerus"
                    externalLink="https://www.onivue.ch/"
                    tags={['react', 'next.js', 'tailwindcss', 'web3forms']}
                    privateLink={false}
                />
                <ProjectCard
                    title="onivue-firebase-boilerplate"
                    text="Firebase authentication and firestore boilerplate."
                    github="https://github.com/onivue/onivue-firebase-booilerplate"
                    tags={['react', 'next.js', 'zustand.js', 'tailwind', 'firebase']}
                />
                <ProjectCard
                    title="onivue-figma"
                    text="Graphics designed by me on Figma."
                    figma="https://www.figma.com/file/kHvT5gpiheIabgMkCcGKu5/onivue.?node-id=0%3A1"
                    externalLink="https://www.onivue.ch/"
                    tags={['react', 'next.js', 'tailwindcss', 'web3forms']}
                />
            </div>
        </Container>
    )
}

export const ProjectCard = ({
    title,
    text,
    github,
    externalLink,
    tags,
    privateCode,
    figma,
    privateLink = true,
}) => {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <div className="flex flex-col justify-between rounded-lg border-2 border-primary-100 p-4  shadow-primary-100/60 transition duration-200 hover:-translate-y-2 dark:shadow-slate-900">
            <h2 className="mb-2 text-lg font-bold">{title}</h2>
            <p>{text}</p>

            <div className="mt-6 flex flex-wrap ">
                {tags &&
                    tags.map((tag, index) => (
                        <label
                            key={index}
                            className="mb-2 mr-2 inline-block rounded-lg bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-800"
                        >
                            {tag}
                        </label>
                    ))}
            </div>

            <div className="mt-6 flex ">
                {privateCode ? (
                    <div className="group flex">
                        <MediaIcon
                            icon={<HiLockClosed className="h-6 w-6 text-red-300 md:h-7 md:w-7" />}
                            href={null}
                            className="mr-4"
                        />
                        <p className="self-center text-xs opacity-0 transition duration-300 group-hover:opacity-100">
                            Sorry, this project ist private.
                        </p>
                    </div>
                ) : github ? (
                    <>
                        <MediaIcon
                            icon={<FaGithub className="h-6 w-6 md:h-7 md:w-7" />}
                            // href={privateLink ? null : github}
                            {...(!privateLink && { href: github })}
                            className="mr-4"
                            onClick={() => privateLink && setModalOpen((s) => !s)}
                        />
                        {externalLink && (
                            <MediaIcon
                                icon={<HiExternalLink className="h-6 w-6 md:h-7 md:w-7" />}
                                href={externalLink}
                                className="mr-4"
                            />
                        )}
                    </>
                ) : (
                    figma && (
                        <>
                            <MediaIcon
                                icon={<SiFigma className="h-6 w-6 md:h-7 md:w-7" />}
                                href={figma}
                                className="mr-4"
                            />
                        </>
                    )
                )}
            </div>
            <Modal
                show={modalOpen}
                onClose={() => setModalOpen((s) => !s)}
                title="Get access to the source code"
                type="info"
            >
                <div className="grid grid-cols-1 gap-4 ">
                    <p className="text-gray-500 dark:text-white">
                        Please contact me if you want to have access to my source code.
                    </p>
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="grid grid-cols-1 gap-4 "
                        onSubmit={(e) => console.log(e)}
                    >
                        <input
                            type="hidden"
                            name="apikey"
                            defaultValue="7bb3e387-e17f-41d6-9dc2-20c5ef46a3ca"
                        />
                        <div>
                            <label htmlFor={'name'} className="mb-2 block text-sm font-semibold">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full rounded-xl text-black-700 shadow-md transition duration-150 ease-in focus:outline-none dark:bg-black-700 dark:text-white dark:shadow-none"
                            />
                        </div>
                        <div>
                            <label htmlFor={'email'} className="mb-2 block text-sm font-semibold">
                                Mail
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full rounded-xl text-black-700 shadow-md transition duration-150 ease-in focus:outline-none dark:bg-black-700 dark:text-white dark:shadow-none"
                            />
                        </div>
                        <div>
                            <label htmlFor={'message'} className="mb-2 block text-sm font-semibold">
                                Message
                            </label>
                            <textarea
                                name="message"
                                required
                                defaultValue={''}
                                className="w-full rounded-xl text-black-700 shadow-md transition duration-150 ease-in focus:outline-none dark:bg-black-700 dark:text-white dark:shadow-none"
                            />
                        </div>
                        <input
                            type="hidden"
                            name="redirect"
                            value="https://web3forms.com/success"
                        />
                        <input
                            name="subject"
                            type="hidden"
                            value={`source code request: ${title}`}
                        />
                        <input type="hidden" name="from_name" value={`onivue-portfolio`} />
                        <button
                            type="submit"
                            className="cursor-pointer rounded-lg bg-primary-200 p-4 px-6 text-center text-black-900  shadow-primary-100 hover:bg-primary-300 dark:shadow-none"
                        >
                            Send Request
                        </button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}
