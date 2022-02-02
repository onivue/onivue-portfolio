import { motion } from 'framer-motion'
import LogoIcon from './LogoIcon'

const textVariants = {
    initial: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
}

export const CitationOverlay = ({ citation }) => {
    return (
        <motion.div
            className="absolute flex items-center justify-center w-full"
            variants={{
                initial: {
                    opacity: 1,
                    height: '100%',
                },
                invisible: {
                    opacity: 0,
                    height: 0,
                },
            }}
            transition={{
                duration: 0.6,
            }}
            initial="initial"
            animate={citation ? 'initial' : 'invisible'}
        >
            <div className="flex flex-col items-center justify-center">
                <motion.div
                    variants={textVariants}
                    initial="initial"
                    animate="visible"
                    transition={{
                        delay: 0.3,
                        duration: 2,
                    }}
                >
                    <div className="p-2 rounded-full fill-current dark:bg-white">
                        <LogoIcon className="w-12 h-12" />
                    </div>
                </motion.div>
                <motion.p
                    className="mt-4 mb-2 text-xl font-medium leading-none md:text-2xl dark:text-white text-black-900 md:my-0"
                    variants={textVariants}
                    initial="initial"
                    animate="visible"
                    transition={{
                        delay: 0.9,
                        duration: 2,
                    }}
                >
                    onivue
                </motion.p>
                <motion.p
                    className="text-base md:text-right dark:text-white text-black-700"
                    initial="initial"
                    animate="visible"
                    variants={textVariants}
                    transition={{
                        delay: 1.0,
                        duration: 2,
                    }}
                >
                    Albin Hoti
                </motion.p>
            </div>
        </motion.div>
    )
}
