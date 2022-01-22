import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'
import { MediaIcon } from '@/components/MediaIcon'
import { Container } from '@/components/Container'
import { HiExternalLink, HiLockClosed } from 'react-icons/hi'

export const Projects = () => {
    return (
        <Container className="mb-14">
            <h2 className="mb-4 text-2xl font-bold dark:text-white-900 text-black-900">Projects</h2>
            <p className="text-base md:text-xl dark:text-white-700 text-black-700">
                Here are some of my most favourite projects that I enjoyed coding and designing from
                scratch.
            </p>

            <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
                <ProjectCard
                    title="onivue-resume"
                    text="User friendly web app to generate Resume's on the fly."
                    github="https://github.com/onivue/onivue-resume"
                    externalLink="https://github.com/onivue/onivue-resume"
                    tags={[
                        'react',
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
                    github="https://github.com/onivue/onivue-numers"
                    externalLink="https://github.com/onivue/onivue-numerus"
                    tags={['react', 'next.js', 'tailwindcss', 'zustand.js', 'headless-ui']}
                />
                <ProjectCard
                    title="sscit-visierung"
                    text="Documents sighting workflow based on SharePoint libraries."
                    github="https://github.com/onivue/onivue-numers"
                    externalLink="https://github.com/onivue/onivue-numerus"
                    tags={['javascript', 'css', 'powershell']}
                    privateCode={true}
                />
                <ProjectCard
                    title="sscit-employee-introduction"
                    text="Add and manage work items for new Employees, based on SharePoint lists."
                    github="https://github.com/onivue/onivue-numers"
                    externalLink="https://github.com/onivue/onivue-numerus"
                    tags={['react', 'pnpjs', 'css']}
                    privateCode={true}
                />
                <ProjectCard
                    title="sscit-tip-mip"
                    text="Generate medication information document for tumor therapy patients, dynamically generated based on selected mediciations.
                    Word file can be generated directly in the browser."
                    github="https://github.com/onivue/onivue-numers"
                    externalLink="https://github.com/onivue/onivue-numerus"
                    tags={['javascript', 'css', 'docxtemplater', 'microsoft word']}
                    privateCode={true}
                />
                <ProjectCard
                    title="sscit-word-template-changer"
                    text="PowerShell Script to bulk change layout on existing documents, like header, footer and page margins."
                    github="https://github.com/onivue/onivue-numers"
                    externalLink="https://github.com/onivue/onivue-numerus"
                    tags={['powershell', 'microsoft word']}
                    privateCode={true}
                />
                <ProjectCard
                    title="sscit-wiki"
                    text="Document control workflow, based on SharePoint Libraries."
                    github="https://github.com/onivue/onivue-numers"
                    externalLink="https://github.com/onivue/onivue-numerus"
                    tags={['powershell']}
                    privateCode={true}
                />
            </div>
        </Container>
    )
}

export const ProjectCard = ({ title, text, github, externalLink, tags, privateCode }) => {
    return (
        <div className="flex flex-col justify-between p-4 transition duration-200 border rounded-lg shadow-lg dark:shadow-slate-900 border-amber-200 hover:-translate-y-2 hover:scale-105">
            <h2 className="mb-2 text-lg font-bold">{title}</h2>
            <p>{text}</p>

            <div className="flex flex-wrap mt-6 ">
                {tags &&
                    tags.map((tag, index) => (
                        <label
                            key={index}
                            className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold rounded-lg text-amber-600 bg-amber-100"
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
                            href={github}
                            className="mr-4"
                        />
                        <p className="self-center text-xs transition duration-300 opacity-0 group-hover:opacity-100">
                            Sorry, this Project ist private.
                        </p>
                    </div>
                ) : (
                    <>
                        <MediaIcon
                            icon={<FaGithub className="w-6 h-6 md:w-7 md:h-7" />}
                            href={github}
                            className="mr-4"
                        />
                        <MediaIcon
                            icon={<HiExternalLink className="w-6 h-6 md:w-7 md:h-7" />}
                            href={externalLink}
                            className="mr-4"
                        />
                    </>
                )}
            </div>
        </div>
    )
}
