import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'
import { MediaIcon } from '@/components/MediaIcon'
import { Container } from '@/components/Container'
import { HiExternalLink, HiLockClosed } from 'react-icons/hi'

import {
    SiReact,
    SiTailwindcss,
    SiFirebase,
    SiNextdotjs,
    SiVisualstudiocode,
    SiPrettier,
    SiPowershell,
    SiNodedotjs,
    SiVercel,
    SiTypescript,
    SiGithub,
    SiFigma,
} from 'react-icons/si'

const iconStyle = 'w-16 h-16 text-primary-200'

export const Skills = () => {
    return (
        <Container className="mb-14">
            <h2 className="mb-4 text-2xl font-bold text-black-900 dark:text-white">Skills</h2>
            <p className="text-base text-black-700 dark:text-white md:text-xl">
                The use of the latest technologies is important to me. These are the tools I am most
                familiar with.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                <ProjectCard
                    title="React"
                    text=""
                    icon={<SiReact className={iconStyle} />}
                    externalLink=""
                />
                <ProjectCard
                    title="Next.js"
                    text=""
                    icon={<SiNextdotjs className={iconStyle} />}
                    externalLink=""
                />
                <ProjectCard
                    title="TypeScript"
                    text=""
                    icon={<SiTypescript className={iconStyle} />}
                    externalLink=""
                />
                <ProjectCard
                    title="Tailwind"
                    text=""
                    icon={<SiTailwindcss className={iconStyle} />}
                    externalLink=""
                />
                <ProjectCard
                    title="Firebase"
                    text=""
                    icon={<SiFirebase className={iconStyle} />}
                    externalLink=""
                />

                <ProjectCard
                    title="Github"
                    text=""
                    icon={<SiGithub className={iconStyle} />}
                    externalLink=""
                />

                <ProjectCard
                    title="PowerShell"
                    text=""
                    icon={<SiPowershell className={iconStyle} />}
                    externalLink=""
                />
                <ProjectCard
                    title="Vercel"
                    text=""
                    icon={<SiVercel className={iconStyle} />}
                    externalLink=""
                />
                <ProjectCard
                    title="Node.js"
                    text=""
                    icon={<SiNodedotjs className={iconStyle} />}
                    externalLink=""
                />
                <ProjectCard
                    title="VS Code"
                    text=""
                    icon={<SiVisualstudiocode className={iconStyle} />}
                    externalLink=""
                />
                <ProjectCard
                    title="Prettier"
                    text=""
                    icon={<SiPrettier className={iconStyle} />}
                    externalLink=""
                />
                <ProjectCard
                    title="Figma"
                    text=""
                    icon={<SiFigma className={iconStyle} />}
                    externalLink=""
                />
            </div>
        </Container>
    )
}

export const ProjectCard = ({ title, text, externalLink, icon }) => {
    return (
        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-primary-100 p-4 transition duration-200 hover:-translate-y-2 dark:shadow-slate-900">
            <h2 className="mb-2 text-lg font-bold">{title}</h2>
            <p>{text}</p>

            <MediaIcon icon={icon} href={null} className="" />
        </div>
    )
}
