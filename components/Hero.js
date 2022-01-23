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
                    <div className="flex mt-6">
                        <MediaIcon
                            icon={<FaGithub className="w-6 h-6 md:w-7 md:h-7" />}
                            href="https://github.com/onivue"
                            className="mr-4"
                        />
                        <MediaIcon
                            icon={<FaTelegram className="w-6 h-6 md:w-7 md:h-7" />}
                            href={null}
                            className="mr-4"
                        />
                        <MediaIcon
                            icon={<FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />}
                            href={null}
                            className="mr-4"
                        />
                        <MediaIcon
                            icon={<FaTwitter className="w-6 h-6 md:w-7 md:h-7" />}
                            href={null}
                        />
                    </div>
                </div>
                <div className="relative row-start-1 md:row-start-auto">
                    <div className="absolute w-1/3 transform -translate-x-1/2 -translate-y-1/2 md:w-1/2 top-1/2 left-1/2 -z-10 text-amber-200">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill="currentColor"
                                d="M48.3,-60.2C59.5,-48.1,63.4,-30,67,-11.5C70.7,7,74.1,25.9,66.4,37.5C58.7,49,39.8,53.3,21.8,59.8C3.8,66.4,-13.4,75.2,-27.2,71.5C-41,67.9,-51.3,51.8,-62,35C-72.7,18.2,-83.7,0.7,-82.1,-15.5C-80.5,-31.8,-66.2,-46.8,-50.4,-58.1C-34.6,-69.3,-17.3,-76.7,0.6,-77.5C18.5,-78.2,37.1,-72.3,48.3,-60.2Z"
                                transform="translate(100 100)"
                            />
                        </svg>
                    </div>
                    <div className="absolute w-1/3 transform -translate-x-1/2 -translate-y-1/2 md:w-1/2 top-1/2 left-1/2 -z-20 text-amber-300">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill="#FEF3C7"
                                d="M40.5,-64.7C54,-54.3,67.5,-45.7,71.5,-33.6C75.5,-21.5,70.1,-6.1,69.1,10.8C68,27.8,71.5,46.3,65.2,60.3C59,74.3,43.2,83.8,26.5,87.5C9.7,91.2,-7.9,89.1,-24.2,83.7C-40.5,78.3,-55.3,69.6,-62,56.6C-68.6,43.7,-67,26.6,-69.7,9.8C-72.4,-6.9,-79.5,-23.2,-77.2,-38.2C-74.9,-53.2,-63.3,-66.8,-48.9,-76.8C-34.5,-86.7,-17.2,-93.1,-1.9,-90.2C13.5,-87.3,27,-75.2,40.5,-64.7Z"
                                transform="translate(100 100)"
                            />
                        </svg>
                    </div>
                    <motion.img
                        src="/images/me.jpg"
                        alt="me"
                        className="self-center object-cover w-40 h-40 mx-auto my-4 rounded-full shadow-lg md:w-40 md:h-40 ring-4 ring-amber-200"
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
                className="absolute bottom-0 left-0 w-full bg-amber-400 h-0.5"
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
