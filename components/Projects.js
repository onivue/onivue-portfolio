import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'
import { MediaIcon } from '@/components/MediaIcon'
import { Container } from '@/components/Container'
import { HiExternalLink, HiLockClosed } from 'react-icons/hi'
import { useState } from 'react'
import Modal from './Modal'

export const Projects = () => {
    return (
        <Container className="mb-14">
            <h2 className="mb-4 text-2xl font-bold dark:text-white text-black-900">Projects</h2>
            <p className="text-base md:text-xl dark:text-white text-black-700">
                Here are some of my most favourite projects that I enjoyed coding and designing from
                scratch.
            </p>

            <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
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
                />
                <ProjectCard
                    title="onivue-numerus"
                    text="Web counter app for fun game nights."
                    github="https://github.com/onivue/onivue-numerus"
                    externalLink="https://numerus.onivue.ch/"
                    tags={['react', 'next.js', 'tailwindcss', 'zustand.js', 'headless-ui']}
                />
                <ProjectCard
                    title="onivue-portfolio"
                    text="My Portfolio."
                    github="https://github.com/onivue/onivue-numerus"
                    externalLink="https://www.onivue.ch/"
                    tags={['react', 'next.js', 'tailwindcss', 'web3forms']}
                />
                <ProjectCard
                    title="sscit-visierung"
                    text="Documents sighting workflow based on SharePoint libraries."
                    tags={['javascript', 'css', 'powershell']}
                    privateCode={true}
                />
                <ProjectCard
                    title="sscit-employee-introduction"
                    text="Add and manage work items for new Employees, based on SharePoint lists."
                    tags={['react', 'pnpjs', 'css']}
                    privateCode={true}
                />
                <ProjectCard
                    title="sscit-tip-mip"
                    text="Generate medication information document for tumor therapy patients, dynamically generated based on selected mediciations.
                    Word file can be generated directly in the browser."
                    tags={['javascript', 'css', 'docxtemplater', 'microsoft word']}
                    privateCode={true}
                />
                <ProjectCard
                    title="sscit-word-template-changer"
                    text="PowerShell Script to bulk change layout on existing documents, like header, footer and page margins."
                    tags={['powershell', 'microsoft word']}
                    privateCode={true}
                />
                <ProjectCard
                    title="sscit-wiki"
                    text="Document control workflow, based on SharePoint Libraries."
                    tags={['powershell']}
                    privateCode={true}
                />
            </div>
        </Container>
    )
}

export const ProjectCard = ({ title, text, github, externalLink, tags, privateCode }) => {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <div className="flex flex-col justify-between p-4 transition duration-200 border rounded-lg shadow-lg dark:shadow-slate-900 border-amber-200 hover:-translate-y-2 hover:scale-105">
            <h2 className="mb-2 text-lg font-bold">{title}</h2>
            <p>{text}</p>

            <div className="flex flex-wrap mt-6 ">
                {tags &&
                    tags.map((tag, index) => (
                        <label
                            key={index}
                            className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold rounded-lg text-amber-800 bg-amber-100"
                        >
                            {tag}
                        </label>
                    ))}
            </div>

            <div className="flex mt-6 ">
                {privateCode ? (
                    <div className="flex group">
                        <MediaIcon
                            icon={<HiLockClosed className="w-6 h-6 text-red-300 md:w-7 md:h-7" />}
                            href={null}
                            className="mr-4"
                        />
                        <p className="self-center text-xs transition duration-300 opacity-0 group-hover:opacity-100">
                            Sorry, this project ist private.
                        </p>
                    </div>
                ) : (
                    <>
                        <MediaIcon
                            icon={<FaGithub className="w-6 h-6 md:w-7 md:h-7" />}
                            // href={github}
                            href={null}
                            className="mr-4"
                            onClick={() => setModalOpen((s) => !s)}
                        />
                        <MediaIcon
                            icon={<HiExternalLink className="w-6 h-6 md:w-7 md:h-7" />}
                            href={externalLink}
                            className="mr-4"
                        />
                    </>
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
                            <label htmlFor={'name'} className="block mb-2 text-sm font-semibold">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full transition duration-150 ease-in rounded-md shadow-md text-black-700 focus:outline-none dark:text-white dark:shadow-none dark:bg-black-700"
                            />
                        </div>
                        <div>
                            <label htmlFor={'email'} className="block mb-2 text-sm font-semibold">
                                Mail
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full transition duration-150 ease-in rounded-md shadow-md text-black-700 focus:outline-none dark:text-white dark:shadow-none dark:bg-black-700"
                            />
                        </div>
                        <div>
                            <label htmlFor={'message'} className="block mb-2 text-sm font-semibold">
                                Message
                            </label>
                            <textarea
                                name="message"
                                required
                                defaultValue={''}
                                className="w-full transition duration-150 ease-in rounded-md shadow-md text-black-700 focus:outline-none dark:text-white dark:shadow-none dark:bg-black-700"
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
                            className="p-4 px-6 text-center rounded-lg shadow-lg cursor-pointer text-black-900 bg-amber-200 shadow-amber-100 hover:bg-amber-300 dark:shadow-none"
                        >
                            Send Request
                        </button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}
