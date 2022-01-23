import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'
import { MediaIcon } from '@/components/MediaIcon'
import { Container } from '@/components/Container'

export const Hero = () => {
    return (
        <Container className="pt-24 md:pt-32 mb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div>
                    <div className="flex items-center">
                        <h1 className="mb-1 text-lg font-bold text-black-900 dark:text-white">
                            Hey! I'm Albin 👋
                        </h1>
                    </div>
                    <h2 className="text-3xl font-bold">
                        I'm a developer — {''}
                        <span className="text-amber-400 ">make small things important</span> & {''}
                        <span className="text-amber-400 ">think out of the box</span>.
                    </h2>
                </div>
                <motion.img
                    src="/images/me.jpg"
                    alt="me"
                    className="self-center object-cover w-40 h-40 row-start-1 mx-auto rounded-full shadow-lg md:row-start-auto md:w-40 md:h-40 ring-4 ring-amber-200"
                    variants={{
                        hidden: {
                            scale: 0,
                            opacity: 0,
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                        },
                    }}
                    transition={{
                        damping: 5,
                        mass: 1,
                        delay: 0.2,
                    }}
                    initial="hidden"
                    animate="visible"
                />
            </div>

            <div className="flex mt-6">
                <MediaIcon
                    icon={<FaGithub className="w-6 h-6 md:w-7 md:h-7" />}
                    href="https://github.com/ironsoul0"
                    className="mr-4"
                />
                <MediaIcon
                    icon={<FaTelegram className="w-6 h-6 md:w-7 md:h-7" />}
                    href="https://t.me/iamironsoul"
                    className="mr-4"
                />
                <MediaIcon
                    icon={<FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />}
                    href="https://www.linkedin.com/in/ironsoul/"
                    className="mr-4"
                />
                <MediaIcon
                    icon={<FaTwitter className="w-6 h-6 md:w-7 md:h-7" />}
                    href="https://twitter.com/ironsoul0"
                />
            </div>
        </Container>
    )
}

export const HeroLink = ({ title, href }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            className="relative text-amber-400"
            whileHover="visible"
            initial="hidden"
        >
            @{title}
            <motion.span
                className="absolute bottom-0 left-0 w-full bg-amber-300 h-0.5"
                variants={{
                    hidden: {
                        opacity: 0,
                        y: -5,
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                    },
                }}
                transition={{
                    damping: 2,
                    mass: 3,
                }}
            />
        </motion.a>
    )
}
